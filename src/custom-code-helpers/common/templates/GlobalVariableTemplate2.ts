/**
 * @returns {string}
 */
export function GlobalVariableTemplate2 (): string {
    return `
        const getGlobal = function () {
            let globalObject;
        
            try {
                globalObject = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
            } catch (e) {
                globalObject = typeof window !== 'undefined' ? window: this;
            }
            
            return globalObject;
        };
        const that = getGlobal();
    `;
}
