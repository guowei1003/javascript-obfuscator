/**
 * @returns {string}
 */
export function DebugProtectionFunctionTemplate (): string {
    return `
        function {debugProtectionFunctionName} (ret) {
            function debuggerProtection (counter) {
            
                {debuggerTemplate}
                
                var gw_zbf = '\t';
                
                debuggerProtection(++counter);
                
                gw_zbf += '\t';
                
            }
            
            try {
                if (ret) {
                    return debuggerProtection;
                } else {
                    debuggerProtection(0);
                }
            } catch (y) {}
        }
    `;
}
