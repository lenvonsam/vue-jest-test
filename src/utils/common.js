import fly from 'flyio'
require('es6-promise').polyfill()
const PROXYURL = 'http://wechat.xingyun361.com/quasarserverdev/'

export function helloWorld () {
  return 'hello world'
}

export function isOdd (val) {
  return val % 2 !== 0
}

export function isEven (val) {
  return val % 2 === 0
}

export function asyncGetNumber(val, cb) {
  setTimeout(function () {
    cb(val + 10)
  }, 2000)
}

function serializeformQuery (requestParams) {
  let query = ''
  for (let param in requestParams) {
    if (param !== undefined && param !== '') {
      query += param + '=' + requestParams[param] + '&'
    }
  }
  if (query !== '') {
    query = query.substring(0, query.length - 1)
  }
  return query
}

export function ironRequest (reqUrl, param, type) {
  // fly.config.timeout = 10000
  const basicUrl = PROXYURL + 'ironmart/httpProxy'
  const reqBody = {
    url: reqUrl,
    type: type,
    params: serializeformQuery(param)
  }
  return fly.post(basicUrl, reqBody)
}