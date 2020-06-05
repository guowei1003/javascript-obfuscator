/**
 * @returns {string}
 */
export function DebuggerTemplateNoEval (): string {
    return `
        if (typeof counter === 'string') {
            var func = function () {
                while (true) {}
            };
            
            return func();
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                window ? window.report(new Date()) : this.report(new Date());
                debugger;
                window ? window.report(new Date()) : this.report(new Date());
            } else {
                debugger;
            }
            
        }
    `;
}
