import React from 'react';
function Footer() {
  return (
    <footer className='bg1'>
      <div className='container p-t-40 p-b-70'>
        <div className='row'>
          <div className='col-sm-6 col-md-4 p-t-50'>
            {/* - */}
            <h4 className='txt13 m-b-33'>Contact Us</h4>
            <ul className='m-b-70'>
              <li className='txt14 m-b-14'>
                <i className='fa fa-map-marker fs-16 dis-inline-block size19' aria-hidden='true' />
                268 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh
              </li>
              <li className='txt14 m-b-14'>
                <i className='fa fa-phone fs-16 dis-inline-block size19' aria-hidden='true' />
                (+84) 28 3864 7256
              </li>
              <li className='txt14 m-b-14'>
                <i className='fa fa-envelope fs-13 dis-inline-block size19' aria-hidden='true' />
                http://www.hcmut.edu.vn
              </li>
            </ul>
            {/* - */}
            <h4 className='txt13 m-b-32'>Opening Times</h4>
            <ul>
              <li className='txt14'>06:00 AM – 21:00 PM</li>
              <li className='txt14'>Every Day</li>
            </ul>
          </div>
          <div className='col-sm-6 col-md-4 p-t-50'>
            {/* - */}
            <h4 className='txt13 m-b-33'>Computer Science 2018</h4>
            <div className='m-b-25'>
              <span className='fs-13 color2 m-r-5'>
                <i className='fa fa-twitter' aria-hidden='true' />
              </span>
              <p className='txt15'>Group 06</p>
              <p className='txt14 m-b-18'>
                Reading Forever is a project of Software Engineering Practice Subject
              </p>
              <span className='txt16'>24 Oct 2019</span>
            </div>
          </div>
        </div>
      </div>
      <div className='end-footer bg2'>
        <div className='container'>
          <div className='flex-sb-m flex-w p-t-22 p-b-22'>
            <div className='p-t-5 p-b-5'>
              <p className='fs-15 c-white'>
                <i className='fa fa-tripadvisor' aria-hidden='true' />
              </p>
              <p className='fs-15 c-white'>
                <i className='fa fa-facebook m-l-18' aria-hidden='true' />
              </p>
              <p className='fs-15 c-white'>
                <i className='fa fa-twitter m-l-18' aria-hidden='true' />
              </p>
            </div>
            <div className='txt17 p-r-20 p-t-5 p-b-5'>
              Copyright © 2018 All rights reserved | This template is made with{' '}
              <i className='fa fa-heart' /> by <p>Colorlib</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
