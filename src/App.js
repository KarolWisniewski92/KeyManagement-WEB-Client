import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Navigation, Button, Wrapper } from 'components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginForm } from 'pages/login/components';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation item={[{
          content: 'zaloguj',
          to: "/login"
        }, {
          content: 'podstrona',
          to: '/otherPage'
        }, {
          content: 'kolejna podstrona',
          to: '/otherPage2'
        }, {
          content: 'kolejna podstrona',
          to: '/otherPage2'
        }]} />

        <Wrapper>
          <Route path="/" exact>
            <Button variant="menu" color="blue"> menu button</Button>
            <Button variant="secondary" color="red"> primary button</Button>
            <Button variant="primary" color="green"> secondary button</Button>
            <Button variant="primary" color="pink"> secondary button</Button>
            <Button variant="primary" color="yellow"> secondary button</Button>
            <Button variant="secondary" color="orange"> secondary button</Button>
          </Route>

          <Switch>
            <Route path="/login" exact>
              <LoginForm />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider >
  );
}


export default App;