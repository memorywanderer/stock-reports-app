import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../features/pages/pagesSlice"
import { useSymbols } from "../hooks/useSymbols"
import { reset } from "../features/stocks/stocksSlice"
import { Button } from "./ui/Button"
import { styled } from "../stitches.config"

const Row = styled('div', {
  display: "flex",
  gap: "8px",
})

export const Pagination = () => {
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
    <Row>
      <Button data-testid="prev-btn" color="secondary" onClick={handlePrevButton}>Назад</Button>
      <Button data-testid="next-btn" color="primary" onClick={handleNextButton}>Вперёд</Button>
    </Row>
  )
}