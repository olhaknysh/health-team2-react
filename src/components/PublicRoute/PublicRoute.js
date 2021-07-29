import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function PublicRoute({
  children,
  redirectTo,
  ...routeProps
}) {
  //  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated =  false

  return (
    <Route {...routeProps}>
      { isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          children
        )
      }
    </Route>
  );
};
