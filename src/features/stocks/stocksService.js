import axios from "axios"
const API_URL = `${process.env.REACT_APP_API_BASE_URL}/v1/stock/market/batch?&types=quote&symbols=aapl,fb,tsla&token=${process.env.REACT_APP_API_KEY}`

const getStocks = async (entries) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/v1/stock/market/batch?&types=quote&symbols=${entries}&token=${process.env.REACT_APP_API_KEY}`)

  return response.data
}

export const stockService = {
  getStocks
}
