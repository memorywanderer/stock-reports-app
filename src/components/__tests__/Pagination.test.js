import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Pagination } from '../Pagination';


describe('Pagination component', () => {
  const mockStore = configureStore();
  const store = mockStore({
    symbols: {
      symbols: ['AAPL', 'GOOGL'],
      status: 'success',
      error: null,
    },
    pages: {
      currentPage: 1,
      itemsPerPage: 2,
    },
  });
  it('renders without crashing', () => {


    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    expect(screen.getByTestId('prev-btn')).toBeInTheDocument();
    expect(screen.getByTestId('next-btn')).toBeInTheDocument()
  });

  it('dispatches prevPage action on prev button click', () => {

    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('prev-btn'));

    expect(store.getActions()).toContainEqual({ type: 'pages/prevPage' });
  });

  it('dispatches nextPage and reset actions on next button click', () => {

    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('next-btn'));


    expect(store.getActions()).toContainEqual({ type: 'pages/nextPage', payload: 1 });
    expect(store.getActions()).toContainEqual({ type: 'stocks/reset' });
  });
});
