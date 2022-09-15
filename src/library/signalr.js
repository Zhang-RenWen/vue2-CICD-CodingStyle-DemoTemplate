// import {
//   HubConnectionBuilder,
//   LogLevel,
//   HubConnectionState,
// } from '@aspnet/signalr'

// class SignalRWrapper {
//   constructor(connection) {
//     this.connection = connection
//   }

//   async _init() {
//     const url = this.connection

//     try {
//       const signalr = new HubConnectionBuilder()
//         .withUrl(url)
//         .configureLogging(LogLevel.Information)
//         .build()

//       signalr.connection.onclose(async () => {
//         await this.signalr.start()
//       })

//       await signalr.start()

//       // eslint-disable-next-line
//       console.assert(signalr.state === HubConnectionState.Connected)
//       // eslint-disable-next-line
//       console.log("connected")

//       this.signalr = signalr
//     } catch (error) {
//       // eslint-disable-next-line
//       console.assert(signalr.connection.state === HubConnectionState.Disconnected)
//       // eslint-disable-next-line
//       console.log(err)
//       // eslint-disable-next-line
//       console.log('Error, reconnecting...')

//       setTimeout(() => {
//         this._init()
//       }, 1000)
//     }
//   }

//   async start() {
//     await this._init()
//   }

//   close() {
//     if (this.signalr) {
//       // eslint-disable-next-line
//       this.signalr.stop().catch(err => { console.log(err) })
//     }
//   }

//   async subscribe(method, handle) {
//     if (!this.signalr) {
//       await this.start()
//     }

//     this.signalr.on(method, handle)
//   }

//   unsubscribe(method, handle) {
//     if (this.signalr) {
//       this.signalr.off(method, handle)
//     }
//   }

//   send(method, ...args) {
//     if (this.signalr) {
//       this.signalr
//         .invoke(method, ...args)
//         // eslint-disable-next-line
//         .catch(err => console.error(err))
//     }
//   }
// }

// function install(Vue, connection) {
//   const SignalRInstance = new SignalRWrapper(connection)

//   Vue.signalr = SignalRInstance

//   Object.defineProperties(Vue.prototype, {
//     $signalr: {
//       get() {
//         return SignalRInstance
//       },
//     },
//   })
// }

// export default install
