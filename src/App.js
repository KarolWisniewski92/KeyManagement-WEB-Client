import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Navigation, Wrapper, ImageWrapper, Footer, Modal, NotificationBox } from 'components';
import {
  Route,
  useHistory
} from "react-router-dom";
import { LoginForm, RegisterForm, Dashboard, History, AddKey } from 'pages';
import { useEffect } from 'react';
import API from './Data/fetch'
import ErrorBoundary from 'components/ErrorBoundary';
import { useSelector } from 'react-redux';

function App() {

  let history = useHistory();

  useEffect(() => {
    API.authentication.checkUser()
      .then(response => response.json())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          // history.push("/dashboard")
        }

      })
      .catch(err => {
        console.log(err.message)
      })
  }, [history]);

  const notification = useSelector(state => state.notification.notification)

  const showNotification = (() => {
    const notificationList = notification.map((el, index) => {
      return <NotificationBox key={index} type={el.type} title={el.title} message={el.message} />
    })

    if (notification.length > 0) {
      return <Modal>{notificationList}</Modal>
    }
  })();

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        {showNotification}

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

        <Route path="/admin">
          <Navigation loginStatus="logged" />
          <Route path="/admin/addKey">
            <AddKey />
          </Route>
        </Route>

        <Footer />
      </ErrorBoundary>
    </ThemeProvider >

  );
}


export default App;