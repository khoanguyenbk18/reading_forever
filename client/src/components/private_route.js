import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {RoleEnum} from '../libs/enum';
const PrivateRoute = ({component: Component, ...rest}) => {
  const isLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return true;
    }
    return false;
  };
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props => (isLogin() ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

export default PrivateRoute;
