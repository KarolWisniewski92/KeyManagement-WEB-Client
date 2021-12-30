import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Navigation, Wrapper, MainWrapper } from 'components';
import {
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
      <MainWrapper>
        <Navigation />

        <Route path="/" exact>
        </Route>
        <Route path="/login" exact>
          <Wrapper direction="column" justify="center">
            <LoginForm />
          </Wrapper>
        </Route>
        <Route path="/register" exact>
          <Wrapper direction="column" justify="center">
            <RegisterForm />
          </Wrapper>
        </Route>

        <Route path="/dashboard" exact>
          <Wrapper direction="column" justify="flex-start">
            <Dashboard />
          </Wrapper>
        </Route>
      </MainWrapper>
    </ThemeProvider >
  );
}


export default App;