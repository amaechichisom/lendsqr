import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {reduxBatch} from '@manaflair/redux-batch'
import {persistStore} from 'redux-persist'
import {rootReducer} from './rootReducer'
import logger from 'redux-logger';

// const sagaMiddleware = createSagaMiddleware()
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    // thunk: true,
  })
]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  // middleware,
  middleware: (getDefautlMiddleware) => {
    return [...getDefautlMiddleware({
      serializableCheck: false,
      immmutableCheck: false
    }), ...middleware]
  },
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
})
    
// export type AppDispatch = typeof store.dispatch  


export const persistor = persistStore(store)

export default store
 
 
      