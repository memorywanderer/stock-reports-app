import axios from 'axios'
const API_URL = `${process.env.REACT_APP_API_BASE_URL}/stable/ref-data/symbols?token=${process.env.REACT_APP_API_KEY}`

const getSymbols = async () => {
  const response = await axios.get(API_URL)

  // Get only unique symbols
  return Array.from(new Set(response.data.map(data => data.symbol)))
}

export const symbolsService = {
  getSymbols
}