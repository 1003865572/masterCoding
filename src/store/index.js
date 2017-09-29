import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}

// import { createStore, applyMiddleware, compose } from 'redux'
// import promiseMiddleware from 'redux-promise'
// import rootReducer from './reducers'
// import devTools from '../util/remote-redux-devtools'
//
// // export default function configStore () {
// //   const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
// //   return store
// // }
// export default function configStore () {
//   const store = createStore(
//     rootReducer,
//     compose(
//       devTools({
//         hostname: 'localhost',
//         port: 5678,
//         secure: false
//       }),
//       applyMiddleware(promiseMiddleware)
//     )
//   )
//   console.info(store.getState())
//   return store
// }
