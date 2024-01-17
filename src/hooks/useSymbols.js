import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSymbols } from "../features/symbols/symbolsSlice"

export const useSymbols = () => {
  const {
    symbols,
    status: symbolsStatus,
    error: symbolsError
  } = useSelector(state => state.symbols)
  const dispatch = useDispatch()

  useEffect(() => {
    if (symbolsStatus === 'idle') {
      dispatch(getSymbols())
    }

  }, [dispatch, symbols])

  return {
    symbols,
    symbolsStatus,
    symbolsError
  }
}