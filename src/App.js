import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Loader from './components/common/Loader'
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
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={paths.home}>
              <HomePage />
            </Route>

              <PublicRoute
                path={paths.register}
                restricted
                redirectTo={paths.diary}
              >
                <RegisterPage />
              </PublicRoute>

              <PublicRoute
                path={paths.login}
                restricted
                redirectTo={paths.diary}
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute
                path={paths.calculator}
                redirectTo={paths.login}
              >
                <CalculatorPage />
              </PrivateRoute>

              <PrivateRoute path={paths.diary} redirectTo={paths.login}>
                <DiaryPage />
              </PrivateRoute>


            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
