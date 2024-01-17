import { configureStore } from "@reduxjs/toolkit"
import stockReducer from '../features/stocks/stocksSlice'
import symbolsReducer from '../features/symbols/symbolsSlice'
import pagesReducer from '../features/pages/pagesSlice'

export default configureStore({
  reducer: {
    stocks: stockReducer,
    symbols: symbolsReducer,
    pages: pagesReducer,
  }
})