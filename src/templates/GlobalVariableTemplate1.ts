/**
 * @returns {string}
 */
export function GlobalVariableTemplate1 (): string {
    return `
        var that;
        
        try {
            var getGlobal = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            
            that = getGlobal();
        } catch (e) {
            that = typeof window !== 'undefined' ? window: typeof wx === 'object'? wx: this;
        }
    `;
}
