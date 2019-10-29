import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Path} from '../libs/path';
const Header = props => {
  const linkHomePage = {pathname: '/'};
  const linkRegisterPage = {pathname: '/register'};
  const linkLoginPage = {pathname: '/login'};
  const linkCreatePostPage = {pathname: '/createPost'};
  const renderNav = () => {
    const HomeButton = (
      <li>
        <Link to={linkHomePage}>Home</Link>
      </li>
    );
    if (localStorage.getItem('user')) {
      const LogoutButton = (
        <li>
          <Link
            onClick={() => {
              localStorage.removeItem('user');
              props.history.push(linkHomePage);
            }}>
            Logout
          </Link>
        </li>
      );

      const CreatePost = (
        <li>
          <Link to={linkCreatePostPage}>Create Post</Link>
        </li>
      );

      return (
        <ul className='main_menu'>
          {HomeButton}
          {LogoutButton}
          {CreatePost}
        </ul>
      );
    } else {
      const RegisterButton = (
        <li>
          <Link to={linkRegisterPage}>Register</Link>
        </li>
      );

      const LoginButton = (
        <li>
          <Link to={linkLoginPage}>Login</Link>
        </li>
      );
      return (
        <ul className='main_menu'>
          {HomeButton}
          {RegisterButton}
          {LoginButton}
        </ul>
      );
    }
  };
  //hide header in dashboard
  if (props.history.location.pathname === Path.Dashboard) return null;
  return (
    <header>
      {/* Header desktop */}
      <div className='wrap-menu-header gradient1 trans-0-4'>
        <div className='container h-full'>
          <div className='wrap_header trans-0-3'>
            {/* Menu */}
            <div className='wrap_menu p-l-45 p-l-0-xl'>
              <nav className='menu'>{renderNav()}</nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default withRouter(Header);
