const a0a=['WRGgW4tcMdev','iHxdJSov','WR3dLmo7rCowW6O=','WQDCW7xdJW==','rMhcGZG=','w8kzACoPW4i=','WQddHmo8rq==','BmkYhSkefKFdKuxdI8o1','WR3dQMC=','sKlcV8oxW6tcHW==','WOJdQ2pdP8o7iNet','WOabW58y','W57cOIxdHCo1WPqsW7LiW64=','WQ4qu8ktWPBdKG==','W43cUcVdG8ozWO8pW6XS','W7JcOSkRWQO=','WPhdNCovlmkqiSkwdqNdVmk3imkDlSoEWRH7','j8oYWOBcHW==','WR8mWOO=','z3tdJdb3ymk0fCouiwfZsW3cJupcP1y=','FColW5m4tq==','WR/dOh7dUgaz','A8kiWQLVcmk5','yGFdGSkO','DCkzWQ9UcCk6oSoRW78=','WQJcUgP1sxVdRZxdQSoHW5JdQW==','W5dcNCkqW40nfM0=','uSoRWQu=','gXnG','uWlcKSktWQ0=','WPZcV3DV','WQGxW5BcNHCxcKldSmkj','W6ddGZ1cy8k+','nbxdLmoqAHa=','pmoeW7SybG==','lddcKam9Aa==','W5FdR2FdVdW=','vrhcJmkq','ErFdImkZ','qwhcMZu=','W7xdTMBcOG==','Fmk2fSkvma==','osZcNbG2ECkKfSoc','WRtdVSo9hG==','k8ooW4qPh8oGxq5A','W5hcL8kwW5SvbNf+rCoNcKDNW4JdGCoYWOi=','EWFdI8k+dqO=','WQrgW7tdKW==','ot/cGq00FG==','WQFdOgpdQW==','W6vvWOJcShOvb1tdGSkBFGL4WQSyW58kdCol','nSooWOSyiSogAYWf','sdxdOW==','y8k/eCkriua=','pGzz','lCkfW6ddTa==','WOFdNmoBjG==','dfVdS8kuW4rm','jCoPW7hdJh17','W6VcR8kMWRiAACk6WPG=','WRGpW5VcHsa=','WPNcKsTn','lmo/W6pdGx9N','WQtdPCojW5RdTem=','a241WR0=','W5xcMSkdW7OVgMf+ACoA','WRZcImoPjq==','W4SxW5K=','ACk1dCkZneVdNq==','e0POWRu=','xI/dRNhcHSk7W5n9W45m','wSkADmoNW5eH','WRFdLmo7','W7pcSwO/xSkt','WQzwW7FdNSkFWOG=','uSoKWRJdOW==','bvNcPq==','WQzwW7BdJSkBWO80','yCkOlSoVW7b/weHAB3fxuxyWW67dLWpcONJdO8oNxmk1jCkPC8oOW7CZr8kw','WQZcNCoKkMq=','lSooW4C=','WPddOv7dTmo9iW==','FCktW77cUH9SW4m=','ebZcHCksW6i=','dmorW5FcHsRdOG==','W5RdPuBcRG=='];(function(a,b){const e=function(f){while(--f){a['push'](a['shift']());}};e(++b);}(a0a,0xb3));const a0b=function(a,b){a=a-0x0;let c=a0a[a];if(a0b['GCmvCF']===undefined){var d=function(g){const h='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',i=String(g)['replace'](/=+$/,'');let j='';for(let k=0x0,l,m,n=0x0;m=i['charAt'](n++);~m&&(l=k%0x4?l*0x40+m:m,k++%0x4)?j+=String['fromCharCode'](0xff&l>>(-0x2*k&0x6)):0x0){m=h['indexOf'](m);}return j;};const f=function(g,h){let l=[],m=0x0,n,o='',p='';g=d(g);for(let r=0x0,t=g['length'];r<t;r++){p+='%'+('00'+g['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);}g=decodeURIComponent(p);let q;for(q=0x0;q<0x100;q++){l[q]=q;}for(q=0x0;q<0x100;q++){m=(m+l[q]+h['charCodeAt'](q%h['length']))%0x100,n=l[q],l[q]=l[m],l[m]=n;}q=0x0,m=0x0;for(let u=0x0;u<g['length'];u++){q=(q+0x1)%0x100,m=(m+l[q])%0x100,n=l[q],l[q]=l[m],l[m]=n,o+=String['fromCharCode'](g['charCodeAt'](u)^l[(l[q]+l[m])%0x100]);}return o;};a0b['xDoOQe']=f,a0b['vQVRQl']={},a0b['GCmvCF']=!![];}const e=a0b['vQVRQl'][a];return e===undefined?(a0b['qVCkXd']===undefined&&(a0b['qVCkXd']=!![]),c=a0b['xDoOQe'](c,b),a0b['vQVRQl'][a]=c):c=e,c;};import{parseUrl}from'../utils';import{mb}from'../external/mfs-base64';const md5=require('../external/md5.min.js'),encodeUTF16toUTF8=require('../external/utfx.min.js')[a0b('0x9','g^LW')],MAX_BYTE=0x800,AV='02',KV=a0b('0x38','x@St'),SECRET=a0b('0x47','zT0#'),MF_DOMAIN=[a0b('0xc','HdPN'),a0b('0x2b','&Vh0')];function randomData(a){const b=MF_DOMAIN[a0b('0x31','g^LW')](c=>new RegExp(a0b('0x12','3AAe')+c)[a0b('0x2a','Umj*')](a));if(!b){let c=''+Math[a0b('0x39','&]l3')](Math[a0b('0x1a','QLrC')]()*0x2710);return'0'[a0b('0x43','OB4G')](0x4-c[a0b('0x19','haDI')])+c;}return'';}function _utf16ToUtf8A(b){let c=Math[a0b('0x14','l]qF')](b[a0b('0x19','haDI')],MAX_BYTE),d=0x0,e=[];return encodeUTF16toUTF8(()=>{return d<c&&e[a0b('0xe','Umj*')]<MAX_BYTE?b[a0b('0x3a','lXSk')](d++):null;},f=>{e[a0b('0x28','OB4G')](f);}),e;}const _lmt_s=a=>_utf16ToUtf8A(a)[a0b('0x22','v31i')](0x0,MAX_BYTE)[a0b('0x45','@K3R')](b=>b[a0b('0x3','hVDZ')](0x10))[a0b('0x17','3AAe')](''),_str_l=a=>_utf16ToUtf8A(a)[a0b('0x40','zT0#')];function obfuscateMixdata(a,b){b='0'[a0b('0x27','eECU')](0x4-b[a0b('0x2e','v31i')])+b;const c=Array[a0b('0x23','HdPN')][a0b('0x3c','eVj[')][a0b('0x8','L^@%')](b,f=>f[a0b('0x18','&Vh0')](0x0)),d=[];return Array[a0b('0x7','Yips')][a0b('0x3d','v31i')][a0b('0x3b','YyM(')](a,(f,g)=>{d[a0b('0x1f','eECU')]((a[a0b('0x3f','CnhL')](g)+c[g%0x4])%0x100);}),[...c,...d];}function getReqData(a){const c=!a[a0b('0xf','yF2L')]||a[a0b('0x51','iBeR')]===a0b('0x15','cbKW')||a[a0b('0x4d',')qf3')]===a0b('0x41','iBeR');let d=c&&a[a0b('0x53','bEpV')]||{},f=!c&&a[a0b('0x50','QLrC')]||{},g=parseUrl(a[a0b('0x2d','CnhL')]);d=Object[a0b('0x33','MP9o')]({},g[a0b('0x29','HdPN')]||{},d);let h={},j;for(j in d){h[''+j+decodeURIComponent(void 0x0!==d[j]?d[j]:'')]=!0x0;}if(!c){if(a0b('0x1d','gt^n')!==a0b('0x1b','vww3')){function k(){k='0'[a0b('0x32','4@8)')](0x4-k[a0b('0x2e','v31i')])+k;const l=Array[a0b('0x25','vww3')][a0b('0x2f','9u8J')][a0b('0x1e','nDvp')](k,n=>n[a0b('0x0','v31i')](0x0)),m=[];return Array[a0b('0x25','vww3')][a0b('0x13','lXSk')][a0b('0x20','bEpV')](_mixdata,(n,o)=>{m[a0b('0x55','iBeR')]((_mixdata[a0b('0x5','Yips')](o)+l[o%0x4])%0x100);}),[...l,...m];}}else{let l='';try{l=JSON[a0b('0x11','yF2L')](f);}catch(n){l='';}let m=_lmt_s(l);m&&(h[m]=!0x0);}}return Object[a0b('0x10','eECU')](h)[a0b('0x52','OB4G')]((o,p)=>o>p?-0x1:o<p?0x1:0x0)[a0b('0x36','dskm')]('')+randomData(a[a0b('0x49','vww3')]);}function reqSign(a){try{const b=getReqData(a),c=md5(SECRET+b),d=Date[a0b('0x1','Umj*')](),f=Math[a0b('0x3e','QYKE')](d/0x2710),g=_str_l(b);let h='',i='',j='',k='',l=0x1;try{h=new Error()[a0b('0x48','YyM(')][a0b('0x35','&Vh0')]('\x0a')[a0b('0x4a','hVDZ')];const p=wx[a0b('0x26','lXSk')]();l=0x0,i=p[a0b('0x4b','JZW5')],j=p[a0b('0x4f','&Vh0')],k=p[a0b('0x34','L^@%')];}catch(q){}const m=a0b('0xb','&Vh0')+f+a0b('0x6','3tLM')+c+a0b('0x4c','nDvp')+g+a0b('0xa',')]%l')+KV+a0b('0x4e','hVDZ')+AV+a0b('0x30','JZW5')+h+a0b('0xd','vww3')+l+a0b('0x4','eVj[')+i+a0b('0x21','Umj*')+j+a0b('0x24',']9zM')+k,n=obfuscateMixdata(m,''+d%0x2710),o=a0b('0x44','l]qF')+mb[a0b('0x1c','HdPN')](n);!a[a0b('0x42','mm7b')]&&(a[a0b('0x2','WnOO')]={}),a[a0b('0x37','MP9o')][a0b('0x54','zT0#')]=o;}catch(r){console[a0b('0x16','nDvp')](a0b('0x2c','vww3'),r);}return a;}export const mr=a=>{return a=reqSign(a),wx[a0b('0x46','OB4G')](a);};