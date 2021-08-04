import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/common/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import paths from './utils/routes';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute
              exact
              path={paths.home}
              restricted
              redirectTo={paths.diary}
            >
              <HomePage />
            </PublicRoute>

            <PublicRoute
              path={paths.register}
              restricted
              redirectTo={paths.diary}
            >
              <RegisterPage />
            </PublicRoute>

            <PublicRoute path={paths.login} restricted redirectTo={paths.diary}>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path={paths.calculator} redirectTo={paths.login}>
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
