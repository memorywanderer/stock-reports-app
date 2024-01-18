import { stockService, stocksService } from '../../features/stocks/stocksService'

import axios from 'axios';

jest.mock('axios');

describe('stocksService', () => {
  test('getStocks function', async () => {
    const mockResponse = {
      data: {
        AAPL: { quote: { symbol: 'AAPL', latestPrice: 150 } },
        GOOGL: { quote: { symbol: 'GOOGL', latestPrice: 2800 } }
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const result = await stockService.getStocks('appl,googl');

    expect(result).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/v1/stock/market/batch?&types=quote&symbols=appl,googl&token=${process.env.REACT_APP_API_KEY}`);
  });
});