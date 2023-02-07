import { configureStore } from '@reduxjs/toolkit'
import currenciesReducer from './Currencies/currencies'

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
})