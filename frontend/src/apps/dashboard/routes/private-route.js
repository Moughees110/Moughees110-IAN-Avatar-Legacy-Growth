// src/apps/dashboard/routes/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Redirect to="/auth/login" />}
    />
  );
};

export default PrivateRoute;
