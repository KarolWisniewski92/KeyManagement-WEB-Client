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
import ErrorBoundary from 'components/ErrorBoundary';

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
      .catch(err => {
        console.log(err.message)
      })
  }, [history]);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Route path={["/", "/login", "/register"]} exact>
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
          </MainWrapper>
        </Route>

        <Route path="/dashboard" exact>
          <Navigation />
          <Wrapper direction="column" justify="flex-start">
            <Dashboard />
          </Wrapper>
        </Route>
      </ErrorBoundary>
    </ThemeProvider >
  );
}


export default App;