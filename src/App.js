import React, { Suspense, lazy, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from './components/Modal';
import Button from './components/Button';
import DailyCalorieIntake from './components/DailyCalorieIntake';
import Header from './components/Header';
import Container from './components/common/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import paths from './utils/routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage' /* webpackChunkName: "calculator-page" */),
);
const DiaryPage = lazy(() =>
  import('./pages/DiaryPage' /* webpackChunkName: "diary-page" */),
);

const App = () => {
  const [modal, showModal] = useState(false);
  const toggleModal = () => {
    showModal(prev => !prev);
  };
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<p align="center">Loading...</p>}>
            <Switch>
              <Route exact path={paths.home}>
                <HomePage />
              </Route>

              <PublicRoute
                path={paths.register}
                restricted
                redirectTo={paths.register}
              >
                <RegisterPage />
              </PublicRoute>

              <PublicRoute
                path={paths.login}
                restricted
                redirectTo={paths.login}
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute
                path={paths.calculator}
                redirectTo={paths.calculator}
              >
                <CalculatorPage />
              </PrivateRoute>

              <PrivateRoute path={paths.diary} redirectTo={paths.diary}>
                <DiaryPage />
              </PrivateRoute>

              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Container>
        {/* <Button onClick={toggleModal}>Открыть модалку </Button>
        {modal && (
          <Modal onClose={toggleModal}>
            <DailyCalorieIntake onClose={toggleModal} />
          </Modal>
        )} */}
      </main>
    </>
  );
};

export default App;
