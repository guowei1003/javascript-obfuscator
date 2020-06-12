/**
 * @returns {string}
 */
export function DebugProtectionFunctionCallTemplate (): string {
    return `
        (function () {
            {callControllerFunctionName}(
                this,
                function () {
                
                    {globalVariableTemplate}
                    
                    const regExp1 = new RegExp('function *\\\\( *\\\\)');
                    const regExp2 = new RegExp('\\\\+\\\\+ *\\(?:[a-zA-Z_$][0-9a-zA-Z_$]*\\)', 'i');
           
                    const result = {debugProtectionFunctionName}('init');
                    
                    var doDebug = 0;
                    var debugComputed = '';
                    that.report = function(t){
                        if (doDebug >= 1){
                          return
                        }
                        if (debugComputed != ''){
                            if (t - debugComputed > 100){
                                try {
                                    throw new Error('DebugError');
                                } catch (e) {
                                    console.error(e);
                                    if (typeof wx == 'object'){
                                        that['catechExecption'] = true
                                    }
                                    doDebug += 1;
                                };
                            }else {
                                // console.log('正常')
                            }
                        } else{
                            debugComputed = t;
                        }
                        return
                    }   
                    
                    if (!regExp1.test(result + 'chain') || !regExp2.test(result + 'input')) {
                        result('0');
                    } else {
                        {debugProtectionFunctionName}();
                    }
                }
            )();
        })();
    `;
}
