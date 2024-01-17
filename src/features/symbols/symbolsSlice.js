import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { handleError } from "../../utils/utils"
import { symbolsService } from "./symbolsService"

const initialState = {
  symbols: [],
  status: 'idle',
  error: null,
}

export const getSymbols = createAsyncThunk(
  'symbols/get',
  async (_, thunkAPI) => {
    try {
      return await symbolsService.getSymbols()
    } catch (error) {
      handleError(error, thunkAPI)
    }
  })

const symbolsSlice = createSlice({
  name: "symbols",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getSymbols.pending,
        (state) => {
          state.status = 'loading'
        }
      )
      .addCase(
        getSymbols.fulfilled,
        (state, action) => {
          state.status = 'succeeded'
          state.symbols = state.symbols.concat(action.payload)
        }
      )
      .addCase(
        getSymbols.rejected,
        (state, action) => {
          state.status = 'error'
          state.error = action.payload
        }
      )
  }
})

export default symbolsSlice.reducer