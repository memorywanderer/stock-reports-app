import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
  itemsPerPage: 10
}

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.currentPage = state.currentPage < action.payload ? state.currentPage + 1 : state.currentPage
    },
    prevPage: (state) => {
      state.currentPage = state.currentPage > 1 ? state.currentPage - 1 : state.currentPage
    }
  }
})

export const { nextPage, prevPage } = pagesSlice.actions

export default pagesSlice.reducer