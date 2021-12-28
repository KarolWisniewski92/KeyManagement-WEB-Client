import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Navigation, Wrapper } from 'components';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { LoginForm, RegisterForm, Dashboard } from 'pages';
import { useEffect } from 'react';
import API from './Data/fetch'

function App() {

  let history = useHistory();

  useEffect(() => {
    API.authentication.checkUser()
      .then(response => response.json())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          history.push("/dashboard")
        }
      })
  }, [history]);

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Wrapper>
        <Route path="/" exact>
        </Route>

        <Switch>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/register" exact>
            <RegisterForm />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </ThemeProvider >
  );
}


export default App;