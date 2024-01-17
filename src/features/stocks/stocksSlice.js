import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { stockService } from "./stocksService"

const initialState = {
  stocks: [],
  status: 'idle',
  error: null
}

const handleError = (error, thunkAPI) => {
  const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) &&
    error.message ||
    error.toString()
  return thunkAPI.rejectWithValue(message)
}

export const getStocks = createAsyncThunk(
  'stocks/get',
  async (entries, thunkAPI) => {
    try {
      return await stockService.getStocks(entries)
    } catch (error) {
      handleError(error, thunkAPI)
    }
  }
)

export const selectAllStocks = (state) => {
  return state.stock
}

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      // Get stocks
      .addCase(
        getStocks.pending,
        (state) => {
          state.status = 'loading'
        }
      )
      .addCase(
        getStocks.fulfilled,
        (state, action) => {
          state.status = 'succeeded'
          state.stocks = state.stocks.concat(action.payload)
        }
      )
      .addCase(
        getStocks.rejected,
        (state, action) => {
          state.status = 'error'
          state.error = action.payload
          state.stocks = []
        }
      )
  }
})

export const {
  reset
} = stockSlice.actions


export default stockSlice.reducer;
