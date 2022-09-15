import Vue from 'vue'

function manageSessionStorageStorage(method, key, value) {
  const { NODE_ENV } = process.env
  // method:type :string , selection: GET、SET、DELETE (查詢、新增/修改、刪除)
  const sessionName = 'Storage'
  function isString(o) {
    return typeof o !== 'string'
  }

  function utf8ToB64(str) {
    if (NODE_ENV === 'production') return window.btoa(encodeURIComponent(escape(str)))
    return str
  }
  function b64ToUtf8(str) {
    if (NODE_ENV === 'production') return unescape(decodeURIComponent(window.atob(str)))
    return str
  }
  function hasStorage() {
    return sessionStorage.getItem(sessionName)
      ? JSON.parse(b64ToUtf8(sessionStorage.getItem(sessionName)))
      : false
  }
  if (isString(method)) {
    // alert('manageSessionStorageStorage error type : method')
    return false
  }
  if (isString(key)) {
    // alert('manageSessionStorageStorage error type : key ')
    return false
  }

  let Storage = hasStorage()
  if (!Storage) {
    sessionStorage.setItem(sessionName, utf8ToB64(JSON.stringify({ init: true })))
    Storage = hasStorage()
  }

  // 以下是對 Storage 物件 本身做新刪修
  if (key === sessionName) {
    switch (method) {
      case 'GET': {
        return Storage
      }
      case 'SET': {
        sessionStorage.setItem(sessionName, utf8ToB64(JSON.stringify(value)))
        break
      }
      case 'DELETE': {
        sessionStorage.removeItem(sessionName)
        break
      }
      default: {
        break
      }
    }
  }

  // 以下是對 Storage 物件 裡面的屬性做新刪修

  switch (method) {
    case 'GET': {
      return Storage[key]
    }

    case 'SET': {
      Storage[key] = value
      sessionStorage.setItem(sessionName, utf8ToB64(JSON.stringify(Storage)))
      break
    }
    case 'DELETE': {
      delete Storage[key]
      sessionStorage.setItem(sessionName, utf8ToB64(JSON.stringify(Storage)))
      break
    }
    default: {
      break
    }
  }
  return ''
}
Vue.prototype.manageSessionStorageStorage = manageSessionStorageStorage

export default { manageSessionStorageStorage }
