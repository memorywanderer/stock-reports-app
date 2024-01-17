import { Pagination } from './components/Pagination';
import { StockList } from './components/StockList';
import { useSymbols } from './hooks/useSymbols';

function App() {
  return (
    <>
      <StockList />
      <Pagination />
    </>
  );
}

export default App;
