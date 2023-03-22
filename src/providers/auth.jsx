import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from'react-redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import { PersistGate } from'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import authReducer from '../hooks/auth'
import pageReducer from '../hooks/page'

function AuthProvider({ children }) {
  const persistConfig = { key: '@app-store', storage, version: 1 }
  const persistedReducer = persistReducer(persistConfig, combineReducers({ authReducer, pageReducer }))

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (gdm) => gdm({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
  })

  return(
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistStore(store)}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default AuthProvider
