/**
 * @returns {string}
 */
export function DebugProtectionFunctionCallTemplate (): string {
    return `
        (function () {
            {singleNodeCallControllerFunctionName}(this, function () {
                var regExp1 = new RegExp('function *\\\\( *\\\\)');
                var regExp2 = new RegExp('\\\\+\\\\+ *\\(?:_0x(?:[a-f0-9]){4,6}|(?:\\\\b|\\\\d)[a-z0-9]{1,4}(?:\\\\b|\\\\d)\\)', 'i');
       
                var result = {debugProtectionFunctionName}('init');
                if (this){
                    var doDebug = 0;
                    var debugComputed = '';
                    this.report = function(t){
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
                                        this['catechExecption'] = true
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
                }else{
                    var doDebug = 0;
                    var debugComputed = '';
                    window.report = function(t){
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
                                        window['catechExecption'] = true
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
                }
                if (!regExp1.test(result + 'chain') || !regExp2.test(result + 'input')) {
                    result('0');
                } else {
                    {debugProtectionFunctionName}();
                }
            })();
        })();
    `;
}
