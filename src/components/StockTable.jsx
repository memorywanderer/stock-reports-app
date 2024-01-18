import { useSelector } from "react-redux"
import { useStocks } from "../hooks/useStocks"
import { useSymbols } from "../hooks/useSymbols"
import { Stock } from "./Stock"
import { HeadTableRow, TD, TH, Table, TableContainer, TableRow } from "./ui/Table"
import { Line } from "./ui/Skeleton"
import { HeadingTwo, Text } from "./ui/Typography"

export const StockTable = () => {
  const { symbolsStatus } = useSymbols()
  const { stocks, stocksStatus, stocksError } = useStocks()
  const currentPage = useSelector(state => state.pages.currentPage)
  const itemsPerPage = useSelector(state => state.pages.itemsPerPage)

  const content =
    stocksStatus === 'loading' || symbolsStatus === 'loading' ? (
      <>
        {/* Skeleton table placeholder */}
        {[...new Array(10)].map((i, index) => (
          <TableRow data-testid="loading-row" key={index}>
            {[...new Array(7)].map((i, index) => <TD key={index}><Line /></TD>)}
          </TableRow>
        ))}
      </>
    ) : stocksStatus === 'succeeded' ? (
      (stocks && stocks.length > 0 ? Object.entries(stocks[currentPage - 1]) : []).map(([symbol, value], index) => (
        <Stock
          key={symbol}
          value={value}
          index={index}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      ))
    ) : stocksStatus === 'error' ? (
      <TableRow>
        <TD>{stocksError}</TD>
      </TableRow>
    ) : null;


  return (
    <section>
      <HeadingTwo>Отчётность акций компаний</HeadingTwo>
      <Text>
        Ценный инструмент для инвесторов и трейдеров, позволяющий быть в курсе динамики акций на финансовых рынках. Отображение актуальных цен на различные ценные бумаги.
      </Text>
      <TableContainer>
        <Table>
          <thead>
            <HeadTableRow>
              <TH>№</TH>
              <TH>Тикер</TH>
              <TH>Компания</TH>
              <TH>Валюта</TH>
              <TH>Отклонение</TH>
              <TH>Отклонение (%)</TH>
              <TH>Дата / Время</TH>
            </HeadTableRow>
          </thead>
          <tbody>
            {content}
          </tbody>
        </Table>
      </TableContainer>
    </section>
  );
}