/**
 * @returns {string}
 */
export function GlobalVariableTemplate2 (): string {
    return `
        var getGlobal = function () {
            var globalObject;
        
            try {
                globalObject = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
            } catch (e) {
                globalObject = typeof window !== 'undefined' ? window: typeof wx === 'object'? wx: this;
            }
            
            return globalObject;
        };
        var that = getGlobal();
    `;
}
