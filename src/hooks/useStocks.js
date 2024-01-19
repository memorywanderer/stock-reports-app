import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "../features/stocks/stocksSlice";
import { useSymbols } from "./useSymbols";

export const useStocks = () => {
  const {
    symbols,
    symbolsStatus
  } = useSymbols();

  const {
    stocks,
    status: stocksStatus,
    error: stocksError
  } = useSelector((state) => state.stocks);

  const currentPage = useSelector((state) => state.pages.currentPage);
  const itemsPerPage = useSelector((state) => state.pages.itemsPerPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStocks = async () => {
      if (symbolsStatus === 'succeeded' && stocksStatus === 'idle') {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const entries = symbols.slice(start, end).join(",").toLowerCase();
        await dispatch(getStocks(entries));

      }
    };

    fetchStocks();
  }, [dispatch, stocksStatus, symbolsStatus, symbols, currentPage, itemsPerPage]);

  return {
    stocks,
    stocksStatus,
    stocksError
  };
};
