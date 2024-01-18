import { TD, TableRow } from "./ui/Table"

export const Stock = ({ currentPage, itemsPerPage, index, value }) => {

  return (
    <TableRow>
      <TD>{((currentPage - 1) * itemsPerPage) + index + 1}</TD>
      <TD>{value.quote?.symbol}</TD>
      <TD>{value.quote?.companyName}</TD>
      <TD>{value.quote?.currency}</TD>
      <TD color={`${value.quote.change > 0 ? 'growth' : 'decline'}`}>{value.quote?.change}</TD>
      <TD color={`${value.quote.change > 0 ? 'growth' : 'decline'}`}>{(value.quote?.changePercent * 100).toFixed(2)}%</TD>
      <TD>{value.quote?.latestTime}</TD>
    </TableRow>
  )
}