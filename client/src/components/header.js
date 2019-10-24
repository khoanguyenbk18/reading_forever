import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function Header({}) {
  return (
    <header>
      {/* Header desktop */}
      <div className='wrap-menu-header gradient1 trans-0-4'>
        <div className='container h-full'>
          <div className='wrap_header trans-0-3'>
            {/* Logo */}
            {/* <div className='logo'>
              <a href='index.html'>
                <img
                  src='images/icons/logo.png'
                  alt='IMG-LOGO'
                  data-logofixed='images/icons/logo2.png'
                />
              </a>
            </div> */}
            {/* Menu */}
            <div className='wrap_menu p-l-45 p-l-0-xl'>
              <nav className='menu'>
                  <ul className='main_menu'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                    {/* <li>
                      <a href='index.html'>Home</a>
                    </li>
                    <li>
                      <a href='menu.html'>Menu</a>
                    </li>
                    <li>
                      <a href='reservation.html'>Login</a>
                    </li>
                    <li>
                      <a href='gallery.html'>Gallery</a>
                    </li>
                    <li>
                      <a href='about.html'>About</a>
                    </li>
                    <li>
                      <a href='blog.html'>Blog</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact</a>
                    </li> */}
                  </ul>
              </nav>
            </div>
            <div className="Wrap_sign"> 
              <nav className="Sign">
                <ul className="Sign_menu" id="Sign_pro">
                  <li>
                    <Link to="/Sign-up">Sign up</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
