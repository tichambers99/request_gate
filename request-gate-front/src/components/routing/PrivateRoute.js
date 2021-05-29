import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  let auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          >
          </Redirect>
        )
      }
    />
  );
}