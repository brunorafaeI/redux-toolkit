import { configureStore } from '@reduxjs/toolkit'
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

export function PageContentProvier({ children }) {  
  const persistConfig = { key: 'page-content', storage, version: 1 }
  const persistedReducer = persistReducer(persistConfig, authReducer)
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
      {children}
    </Provider>
  )
}
