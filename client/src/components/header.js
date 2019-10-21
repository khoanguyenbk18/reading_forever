import React from 'react';
import {Link} from 'react-router-dom';
function Header({}) {
  const linkHomePage = {pathname: '/'};
  const linkRegisterPage = {pathname: '/register'};
  return (
    <header>
      {/* Header desktop */}
      <div className='wrap-menu-header gradient1 trans-0-4'>
        <div className='container h-full'>
          <div className='wrap_header trans-0-3'>
            {/* Menu */}
            <div className='wrap_menu p-l-45 p-l-0-xl'>
              <nav className='menu'>
                <ul className='main_menu'>
                  <li>
                    <Link to={linkHomePage}>Home</Link>
                  </li>
                  <li>
                    <Link to={linkRegisterPage}>Login</Link>
                  </li>
                  {/* <li>
                    <a href='reservation.html'>Reservation</a>
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
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
