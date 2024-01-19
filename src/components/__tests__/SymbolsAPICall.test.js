import { symbolsService } from '../../features/symbols/symbolsService'

import axios from 'axios';

jest.mock('axios');

describe('symbolsService', () => {
  test('getSymbols function', async () => {

    axios.get.mockResolvedValue({
      data: [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' }
      ],
    });


    const symbols = await symbolsService.getSymbols();

    expect(symbols).toEqual(['AAPL', 'GOOGL']);
  });
});