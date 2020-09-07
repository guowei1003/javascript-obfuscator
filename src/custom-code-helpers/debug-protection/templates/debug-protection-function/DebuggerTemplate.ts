/**
 * @returns {string}
 */
export function DebuggerTemplate (): string {
    return `
        if (typeof counter === 'string') {
            return (function (arg) {}.constructor('while (true) {}').apply('counter'));
        } else {
            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {
                (function () {return true;}.constructor('const that = (typeof window !== "undefined" ? window : typeof wx === "object" ? wx : this);typeof that !== "undefined" ? that.report(new Date()) : null;(function () {return true;}.constructor("debu" + "gger").call("action"));typeof that !== "undefined" ? that.report(new Date()) : null;').call('action'));
            } else {
                (function () {return false;}.constructor('const that = (typeof window !== "undefined" ? window : typeof wx === "object" ? wx : this);typeof that !== "undefined" ? that.report(new Date()) : null;(function () {return false;}.constructor("debu" + "gger").apply("stateObject"));typeof that !== "undefined" ? that.report(new Date()) : null;').apply('stateObject'));
            }
            
        }
    `;
}
