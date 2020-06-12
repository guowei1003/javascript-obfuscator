/**
 * @returns {string}
 */
export function DebuggerTemplateNoEval (): string {
    return `
        if (typeof counter === 'string') {
            const func = function () {
                while (true) {}
            };
            
            return func();
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                that ? that.report(new Date()) : null;
                debugger;
                that ? that.report(new Date()) : null;
            } else {
                debugger;
            }
            
        }
    `;
}
