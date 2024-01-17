import axios from 'axios'
const API_URL = "https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_4cf18475069c487aab4a1f146b8dd39e"

const getSymbols = async () => {
  const response = await axios.get(API_URL)

  // Get only unique symbols
  return Array.from(new Set(response.data.map(data => data.symbol)))
}

export const symbolsService = {
  getSymbols
}