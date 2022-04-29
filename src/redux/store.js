import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './counter'
import loginReducer from './login'

export const store = configureStore({
  reducer: {
      count: counterReducer,
      login: loginReducer,
  },
})