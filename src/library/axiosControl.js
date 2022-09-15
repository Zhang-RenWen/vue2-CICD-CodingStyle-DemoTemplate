// import axios from 'axios'
// import store from '@/store/index'

// export default async function axiosWrapper(type, options) {
//   const axiosInstance = axios.create({
//     baseURL: 'http://192.168.8.63:54322/wexflow',
//   })

//   const { url, data = {}, params = {}, headers } = options

//   const userToken = JSON.parse(sessionStorage.getItem('userToken'))
//   const baseHeaders = {
//     'Content-Type': 'application/json',
//     // 'Access-Control-Allow-Origin': '*',
//     Authorization: `Basic ${userToken}`,
//   }
//   const headersWithToken = Object.assign(baseHeaders, headers)

//   const method = type
//   const axiosConfig = {
//     url,
//     method,
//     params,
//     data,
//     headers: headersWithToken,
//   }
//   let axiosResponse = null
//   try {
//     store.commit('startLoading')
//     axiosResponse = await axiosInstance(axiosConfig)

//     if (axiosResponse.data.ResultCode === '01') {
//       store.commit('setBoxMessage', {
//         message: axiosResponse.data.Message,
//         confirmFunction() {
//           // alert('123')
//           window.location.reload()
//         },
//       })
//       return
//     }
//     if (axiosResponse.data.ResultCode !== '00') {
//       store.commit('setBoxMessage', {
//         message: axiosResponse.data.Message,
//         confirmFunction() {
//           window.location = encodeURI('/login')
//         },
//       })
//     }

//     store.commit('endLoading')
//     // return axiosResponse.data.Datas
//   } catch (error) {
//     store.commit('setBoxMessage', {
//       message: error,
//       isShowCancelButton: true,
//     })
//   }
// }
