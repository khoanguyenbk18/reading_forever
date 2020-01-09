import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Path} from '../libs/path';
import {RoleEnum} from '../libs/enum'
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
const Header = props => {
  const linkHomePage = {pathname: Path.LandingPage};
  const linkRegisterPage = {pathname: Path.Register};
  const linkLoginPage = {pathname: Path.Login};
  const linkCreatePostPage = {pathname: Path.CreatePost};
  const linkEditUserProfile = {pathname: Path.EditProfile};
  const linkDashboard = {pathname: Path.Dashboard};
  const linkReport = {pathname: Path.Report};
  const renderNav = () => {
    const HomeButton = (
      <li>
        <Link to={linkHomePage}>Home</Link>
      </li>
    );
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      const count = JSON.parse(localStorage.getItem('count'));
      const report = JSON.parse(localStorage.getItem('report'));
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

      const Profile = (
        <li>
          <Link to={linkEditUserProfile}>{user.username}</Link>
        </li>
      );

      console.log("TCL: renderNav -> user", user)
      let Dashboard;
      let Report;
      if(user.role===RoleEnum.ADMIN){
        Dashboard = (
          <li>
            <NotificationBadge count={parseInt(count.count)?1:0} effect={Effect.SCALE} />
            <Link to={linkDashboard} 
                onClick={()=>{
                  localStorage.setItem('count',0);
                }}
            >
              Pending Post
            </Link>
          </li>
        );
        Report = (
          <li>
            <NotificationBadge count={parseInt(report.report)?1:0} effect={Effect.SCALE} />
            <Link to={linkReport}
                onClick={()=>{
                  localStorage.setItem('report',0);
                }}
            >
              Report
            </Link>
          </li>
        );
      }

      return (
        <ul className='main_menu'>
          {HomeButton}
          {CreatePost}
          {Dashboard?Dashboard:null}
          {Report?Report:null}
          {Profile}
          {LogoutButton}
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