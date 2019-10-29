import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {RoleEnum} from '../libs/enum';
const AdminRoute = ({component: Component, ...rest}) => {
  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('TCL: isLogin -> user', user);
    if (user) {
      if (user.role === RoleEnum.ADMIN) return true;
    }
    return false;
  };
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props => (isAdmin() ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

export default AdminRoute;
