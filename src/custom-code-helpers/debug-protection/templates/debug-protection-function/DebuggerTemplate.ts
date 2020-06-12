/**
 * @returns {string}
 */
export function DebuggerTemplate (): string {
    return `
        if (typeof counter === 'string') {
            return (function (arg) {}.constructor('while (true) {}').apply('counter'));
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                (function () {return true;}.constructor('that ? that.report(new Date()) : null;debu' + 'gger;that ? that.report(new Date()) : null;').call('action'));
            } else {
                (function () {return false;}.constructor('debu' + 'gger').apply('stateObject'));
            }
            
        }
    `;
}
