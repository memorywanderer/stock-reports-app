import { useSelector } from "react-redux"
import { useStocks } from "../hooks/useStocks"
import { useSymbols } from "../hooks/useSymbols"
import { Stock } from "./Stock"


export const StockList = () => {
  const { symbolsStatus } = useSymbols()
  const { stocks, stocksStatus, stocksError } = useStocks()
  const currentPage = useSelector(state => state.pages.currentPage)
  const itemsPerPage = useSelector(state => state.pages.itemsPerPage)

  let content

  if (stocksStatus === 'loading' || symbolsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (stocksStatus === 'succeeded') {
    const stockEntries = stocks && stocks.length > 0 ? Object.entries(stocks[currentPage - 1]) : []

    content = stockEntries.map(([key, value], index) => {
      return <Stock
        key={key}
        value={value}
        index={index}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    })

  } else if (stocksStatus === 'error') {
    content = <tr>
      <td>Quite an empty here</td>
    </tr>
  }

  return (
    <section>
      <h2>Stocks</h2>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Symbol</th>
            <th>Company</th>
            <th>Currency</th>
            <th>Change</th>
            <th>Change percent</th>
            <th>Latest time</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </section>
  );
}