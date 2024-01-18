import React from 'react';
import { render, screen } from '@testing-library/react'
import { StockTable } from '../StockTable'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('../../hooks/useSymbols');
jest.mock('../../hooks/useStocks');

describe('StockTable Component', () => {
  const mockStore = configureStore();
  const initialState = {
    pages: {
      currentPage: 1,
      itemsPerPage: 10,
    }
  };
  test('renders loading state', async () => {
    require('../../hooks/useSymbols').useSymbols.mockReturnValue({
      symbolsStatus: 'loading',
    });

    require('../../hooks/useStocks').useStocks.mockReturnValue({
      stocksStatus: 'loading',
    });

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <StockTable />
      </Provider>
    );

    const loadingRows = screen.getAllByTestId('loading-row');
    // 10 rows are rendered
    expect(loadingRows).toHaveLength(10);
  });
});
