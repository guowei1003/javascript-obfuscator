/**
 * @returns {string}
 */
export function DebuggerTemplate (): string {
    return `
        if (typeof counter === 'string') {
            return (function (arg) {}.constructor('while (true) {}').apply('counter'));
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                (function () {return true;}.constructor("debu" + "gger" + gw_zbf).call('action'));
            } else {
                (function () {return false;}.constructor("debu" + "gger" + gw_zbf).apply('stateObject'));
            }
            
        }
    `;
}
