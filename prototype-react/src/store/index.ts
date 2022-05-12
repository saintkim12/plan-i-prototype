import { configureStore } from '@reduxjs/toolkit'
import token from './token'

export const store = configureStore({
  reducer: {
    token,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
