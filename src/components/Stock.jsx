export const Stock = ({ key, currentPage, itemsPerPage, index, value }) => {
  console.log(value)
  return (
    <tr key={key}>
      <td>{((currentPage - 1) * itemsPerPage) + index + 1}</td>
      <td>{value.quote?.symbol}</td>
      <td>{value.quote?.companyName}</td>
      <td>{value.quote?.currency}</td>
      <td>{value.quote?.change}</td>
      <td>{value.quote?.changePercent}</td>
      <td>{value.quote?.latestTime}</td>
    </tr>
  )
}