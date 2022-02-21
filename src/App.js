import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Navigation, Wrapper, ImageWrapper, Footer} from 'components';
import {
  Route,
  useHistory
} from "react-router-dom";
import { LoginForm, RegisterForm, Dashboard, History } from 'pages';
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
          <Navigation loginStatus="noLogged" />

          <ImageWrapper>
            <Route path="/" exact></Route>

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

          </ImageWrapper>
        </Route>

        <Route path="/dashboard">
          <Navigation loginStatus="logged" />
          <Wrapper direction="column" justify="flex-start">
            <Dashboard />
          </Wrapper>
          <Route path="/dashboard/history">
            <History />
          </Route>
        </Route>

        <Footer />
      </ErrorBoundary>
    </ThemeProvider >

  );
}


export default App;