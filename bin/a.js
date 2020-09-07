/**
 * 接口流量安全 签名方案
 * 签名方案文档：https://missfresh.feishu.cn/space/doc/doccnMNk5g1Nrq50WdNJnr#
 *
 * by Koala(daihb@missfresh.cn) @2019/09
 */
import { parseUrl } from "../utils"
import { mb } from '../external/mfs-base64'
const md5 = require('../external/md5.min.js')
const encodeUTF16toUTF8 = require('../external/utfx.min.js').encodeUTF16toUTF8
// 常量定义
const MAX_BYTE = 2048 // POST body 最大字节数
const AV = '02' // version —— 安全部门提供
const KV = '000001' // key —— 安全部门提供
const SECRET = 'WW4oU6KFwqS7cII3ctikg7WJBk7GyZuG' // secret —— 安全部门提供
const MF_DOMAIN = [ // 请求域名白名单
  '.*?\\.missfresh\\.cn',
  '.*?\\.missfresh\\.net'
]

/**
 * 若请求的域名不在 MF_DOMAIN 中
 * 则返回 四位随机数
 */
function randomData (url) {
  const isMFD = MF_DOMAIN.some(i => new RegExp(`^https?:\\/\\/${i}`).test(url))
  if (!isMFD) {
    let x = '' + Math.ceil(Math.random() * 10000)
    return '0'.repeat(4 - x.length) + x
  }
  return ''
}

/**
 * String -> utf-16 code array -> utf-8 code array
 */
function _utf16ToUtf8A (s) {
  let l = Math.min(s.length, MAX_BYTE), i = 0, a = []
  encodeUTF16toUTF8(() => {
    return i < l && a.length < MAX_BYTE ? s.charCodeAt(i++) : null
  }, c => {
    a.push(c)
  })
  return a
}

// String -> utf-8 code array, limit MAX_BYTE bytes -> Hex String
const _lmt_s = s => _utf16ToUtf8A(s).slice(0, MAX_BYTE).map(i => i.toString(16)).join('')
// String -> length of utf-8 code array
const _str_l = s => _utf16ToUtf8A(s).length

/**
 * 对mixdata做混淆
 * 步骤:
 * 1. 取ts字段的末尾四位数字的ASCII值作为key数组, key = [a, b, c, d]
 * 2. 循环对mixdata中的每个字符做处理: (_mixdata.charCodeAt(i) + key[i % 4]) % 256
 * 3. 处理后的字符拼接成新的字符串
 */
function obfuscateMixdata (_mixdata, k) {
  k = '0'.repeat(4 - k.length) + k;
  const _sk = Array.prototype.map.call(k, e => e.charCodeAt(0))
  const _sa = []
  Array.prototype.forEach.call(_mixdata, (e, i) => {
    _sa.push((_mixdata.charCodeAt(i) + _sk[i % 4]) % 256)
  })
  return [..._sk, ..._sa]
}

/**
 * 获取请求参数处理后的_data
 * 步骤:
 * 1. 解析url中的params参数
 * 2. 将步骤1的参数与传入的data做合并
 * 3. 将params中的键值对按此格式处理成字符串: `${key}${val}`
 * 4. 将POST请求的body内容，专程16进制字符串
 * 5. 对步骤3、4获取到的字符串，做去重，并倒序排序
 * 6. 将排序后的字符串拼接成_data
 */
function getReqData (req) {
  const isGet = !req.method || req.method === 'GET' || req.method === 'get'
  let param = isGet && req.data || {}
  let body = !isGet && req.data || {}

  let urlOps = parseUrl(req.url)
  param = Object.assign({}, urlOps.params || {}, param)
  // console.log(urlOps.uri)
  // console.log(req.method, req.url, param, body)
  let _uni = {}, i
  for (i in param) {
    _uni['' + i + (decodeURIComponent(void 0 !== param[i] ? param[i] : ''))] = !0
  }

  if (!isGet) {
    let b = ''
    try {
      b = JSON.stringify(body)
    } catch (e) {
      b = ''
    }
    let _body = _lmt_s(b)
    _body && (_uni[_body] = !0)
  }
  return Object.keys(_uni).sort((a, b) => a > b ? -1 : a < b ? 1 : 0).join('') + randomData(req.url)
}

/**
 * 请求加签处理
 * 步骤：
 * 1. 处理请求体参数 获取到 _data 串
 * 2. _sign = md5(_data + SECRET)
 * 3. _mixdata = `ts=${ts}&sign=${_sign}&len=${len}&kv=${KV}&av=${AV}`
 * 4. 对mixdata做混淆处理 _o_mixdata = obfuscateMixdata(_mixdata)
 * 5. mfsig = 'mfsw' + mb.encode(_o_mixdata)
 * 6. 请求头写入 mfsig=mfsig
 */
function reqSign (req) {
  try {
    const _data = getReqData(req)
    // console.log('_data:', _data)
    const _sign = md5(SECRET + _data)
    // const _mixdata = `ts=${Math.ceil(Date.now()/10000)}&sign=${_sign}&len=${_str_l(_data)}&kv=${KV}&av=${AV}`
    const _ts = Date.now()// Math.ceil(Date.now()/10000)
    const ts = Math.ceil(_ts/10000)
    const len = _str_l(_data)

    let sl = '', wv = '', sv = '', pt = ''
    let wxe = 1
    try {
      sl = (new Error()).stack.split('\n').length
      const sysInfo = wx.getSystemInfoSync()
      wxe = 0
      wv = sysInfo.version
      sv = sysInfo.system
      pt = sysInfo.platform
    } catch(e) {}
    const _mixdata = `ts=${ts}&sign=${_sign}&len=${len}&kv=${KV}&av=${AV}&sl=${sl}&wxe=${wxe}&wv=${wv}&sv=${sv}&pt=${pt}`
    // console.log('_mixdata:', _mixdata)
    const _o_mixdata = obfuscateMixdata(_mixdata, '' + (_ts%10000))
    // console.log('obfuscation _mixdata:', _o_mixdata)
    const mfsig = 'mfsw' + mb.encode(_o_mixdata)

    // console.log({
    //   req,
    //   _data,
    //   _ts,
    //   ts,
    //   _mixdata,
    //   _mix_key: _ts%10000,
    //   _o_mixdata,
    //   mfsig
    // })

    !req.header && (req.header = {})
    req.header['mfsig'] = mfsig
  } catch (e) {
    console.error('mr ERROR:', e)
  }
  return req
}

/**
 * 统一wx.request入口
 * 请求前对请求体进行加签操作
 */
export const mr = (req) => {
  req = reqSign(req)
  return wx.request(req)
}
