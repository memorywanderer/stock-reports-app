import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../features/pages/pagesSlice"
import { useSymbols } from "../hooks/useSymbols"
import { reset } from "../features/stocks/stocksSlice"


export const Pagination = () => {
  const currentPage = useSelector(state => state.pages.currentPage)
  const itemsPerPage = useSelector(state => state.pages.itemsPerPage)
  const { symbols } = useSymbols()
  const dispatch = useDispatch()

  const handlePrevButton = () => {
    dispatch(prevPage())
  }

  const handleNextButton = () => {
    dispatch(nextPage(symbols.length / itemsPerPage))
    dispatch(reset())
  }

  return (
    <>
      <div>
        {currentPage}
      </div>
      <button onClick={handlePrevButton}>Prev</button>
      <button onClick={handleNextButton}>Next</button>
    </>
  )
}