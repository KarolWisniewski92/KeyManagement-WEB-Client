import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Navigation, Button } from 'components';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        <Button>Kliknij mnie 1 !</Button>
        <Button>Kliknij mnie 2 !</Button>
        <Button>Kliknij mnie 3 !</Button>
      </Navigation>
    </ThemeProvider>
  );
}


export default App;