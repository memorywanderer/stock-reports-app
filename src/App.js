import { Pagination } from './components/Pagination';
import { StockTable } from './components/StockTable';
import { Button } from './components/ui/Button';
import ColourModeProvider, { ColourModeContext } from "./providers/ColourModeProvider";
import { Icons } from './components/Icons';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { globalStyles } from './stitches.config';

function App() {
  globalStyles()
  return (
    <ColourModeProvider>
      <Header>
        <ColorModeToggleButton />
      </Header>
      <StockTable />
      <Pagination />
      <Footer />
    </ColourModeProvider>
  );
}

/*
  Toggle Button - just uses the colorMode value and 
  cycleToggleMode functions returned by the ColourModeContext
*/
const ColorModeToggleButton = () => {
  return (
    <ColourModeContext.Consumer>
      {(context) => (
        <Button color="secondary" onClick={context.cycleToggleMode}>
          {context.colorMode === 'dark' ? <Icons.sun /> : <Icons.moon />}
        </Button>
      )}
    </ColourModeContext.Consumer>
  );
};

export default App;
