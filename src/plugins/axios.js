import axios from 'axios'
// import Vue from 'vue'
// import store from '@/store'
// import router from '@/router'

// const href = window.location.href

// const searchParams = key => {
//   return new URL(href).searchParams.get(key)
// }

// const doGetPathInfo = () => {
//   let url = new URL(href)
//   let pathName = url.pathname
//   let queryParams = url.searchParams.toString()
//   return queryParams ? pathName + '?' + queryParams : pathName
// }

// const combinUrls = arr => {
//   if (!arr || arr.length < 1) return ''
//   return arr.map(p => p.replace(/^\/+|\/+$/g, '').join('/'))
// }

// request interceptor

const reqHandle = config => {
  // 設定 CSRF token 每次發送請求帶上，除了登出或初次帳號確認
  return config
}

const reqError = error => {
  return Promise.reject(error)
}

// response interceptor

const resHandle = config => {
  return config
}

const resError = error => {
  // 跳彈窗 導頁

  // 401 （unauthorized）客戶端錯誤
  // 403 （Forbidden）服務端拒絕授權訪問
  // return Promise.resolve()

  // 其他
  // proxy error 502
  return Promise.reject(error)
}

const interceptors = axios.interceptors
interceptors.request.use(reqHandle, reqError)
interceptors.response.use(resHandle, resError)
