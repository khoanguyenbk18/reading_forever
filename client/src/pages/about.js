import Header from '../components/header';
import React, {Component} from 'react';
import SideBar from '../components/sidebar';

class About extends Component {
  render() {
    return (
      <div>
        {/* Title Page */}
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-title-page-03.jpg)'}}>
          <h2 className='tit6 t-center'>About Us</h2>
        </section>
        {/* Our Story */}
        <section className='bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15'>
          <span className='tit2 t-center'>Italian Restaurant</span>
          <h3 className='tit3 t-center m-b-35 m-t-5'>Our Story</h3>
          <p className='t-center size32 m-l-r-auto'>
            Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam,
            dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar
            ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed
            varius justo sed luctus mattis.
          </p>
        </section>
        {/* Video */}
        <section
          className='section-video parallax100'
          style={{backgroundImage: 'url(images/header-menu-01.jpg)'}}>
          <div className='content-video t-center p-t-225 p-b-250'>
            <span className='tit2 p-l-15 p-r-15'>Discover</span>
            <h3 className='tit4 t-center p-l-15 p-r-15 p-t-3'>Our Video</h3>
            <div
              className='btn-play ab-center size16 hov-pointer m-l-r-auto m-t-43 m-b-33'
              data-toggle='modal'
              data-target='#modal-video-01'>
              <div className='flex-c-m sizefull bo-cir bgwhite color1 hov1 trans-0-4'>
                <i className='fa fa-play fs-18 m-l-2' aria-hidden='true' />
              </div>
            </div>
          </div>
        </section>
        {/* Delicious & Romantic*/}
        <section className='bg1-pattern p-t-120 p-b-105'>
          <div className='container'>
            {/* Delicious */}
            <div className='row'>
              <div className='col-md-6 p-t-45 p-b-30'>
                <div className='wrap-text-delicious t-center'>
                  <span className='tit2 t-center'>Delicious</span>
                  <h3 className='tit3 t-center m-b-35 m-t-5'>RECIPES</h3>
                  <p className='t-center m-b-22 size3 m-l-r-auto'>
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla,
                    nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id
                    neque.
                  </p>
                </div>
              </div>
              <div className='col-md-6 p-b-30'>
                <div className='wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto'>
                  <img src='images/our-story-01.jpg' alt='IMG-OUR' />
                </div>
              </div>
            </div>
            {/* Romantic */}
            <div className='row p-t-170'>
              <div className='col-md-6 p-b-30'>
                <div className='wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto'>
                  <img src='images/our-story-02.jpg' alt='IMG-OUR' />
                </div>
              </div>
              <div className='col-md-6 p-t-45 p-b-30'>
                <div className='wrap-text-romantic t-center'>
                  <span className='tit2 t-center'>Romantic</span>
                  <h3 className='tit3 t-center m-b-35 m-t-5'>Restaurant</h3>
                  <p className='t-center m-b-22 size3 m-l-r-auto'>
                    Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod
                    lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla
                    quis suscipit nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <div
          className='parallax0 parallax100'
          style={{backgroundImage: 'url(images/bg-cover-video-02.jpg)'}}>
          <div className='overlay0-parallax t-center size33' />
        </div>
        {/* Chef */}
        <section className='section-chef bgwhite p-t-115 p-b-95'>
          <div className='container t-center'>
            <span className='tit2 t-center'>Meet Our</span>
            <h3 className='tit5 t-center m-b-50 m-t-5'>Chef</h3>
            <div className='row'>
              <div className='col-md-8 col-lg-4 m-l-r-auto p-b-30'>
                {/* -Block5 */}
                <div className='blo5 pos-relative p-t-60'>
                  <div className='pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t'>
                    <a href='#'>
                      <img src='images/avatar-02.jpg' alt='IGM-AVATAR' />
                    </a>
                  </div>
                  <div className='text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30'>
                    <a href='#' className='txt34 dis-block p-b-6'>
                      Peter Hart
                    </a>
                    <span className='dis-block t-center txt35 p-b-25'>Chef</span>
                    <p className='t-center'>
                      Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum,
                      lob-ortis mi eget, rhoncus nunc
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-8 col-lg-4 m-l-r-auto p-b-30'>
                {/* -Block5 */}
                <div className='blo5 pos-relative p-t-60'>
                  <div className='pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t'>
                    <a href='#'>
                      <img src='images/avatar-03.jpg' alt='IGM-AVATAR' />
                    </a>
                  </div>
                  <div className='text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30'>
                    <a href='#' className='txt34 dis-block p-b-6'>
                      Joyce Bowman
                    </a>
                    <span className='dis-block t-center txt35 p-b-25'>Chef</span>
                    <p className='t-center'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis
                      a sem tempus tempus.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-8 col-lg-4 m-l-r-auto p-b-30'>
                {/* -Block5 */}
                <div className='blo5 pos-relative p-t-60'>
                  <div className='pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t'>
                    <a href='#'>
                      <img src='images/avatar-05.jpg' alt='IGM-AVATAR' />
                    </a>
                  </div>
                  <div className='text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30'>
                    <a href='#' className='txt34 dis-block p-b-6'>
                      Peter Hart
                    </a>
                    <span className='dis-block t-center txt35 p-b-25'>Chef</span>
                    <p className='t-center'>
                      Phasellus aliquam libero a nisi varius, vitae placerat sem aliquet. Ut at
                      velit nec ipsum iaculis posuere quis in sapien
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sign up */}
        <div className='section-signup bg1-pattern p-t-85 p-b-85'>
          <form className='flex-c-m flex-w flex-col-c-m-lg p-l-5 p-r-5'>
            <span className='txt5 m-10'>Specials Sign up</span>
            <div className='wrap-input-signup size17 bo2 bo-rad-10 bgwhite pos-relative txt10 m-10'>
              <input
                className='bo-rad-10 sizefull txt10 p-l-20'
                type='text'
                name='email-address'
                placeholder='Email Adrress'
              />
              <i className='fa fa-envelope ab-r-m m-r-18' aria-hidden='true' />
            </div>
            {/* Button3 */}
            <button type='submit' className='btn3 flex-c-m size18 txt11 trans-0-4 m-10'>
              Sign-up
            </button>
          </form>
        </div>
        {/* Footer */}
        <footer className='bg1'>
          <div className='container p-t-40 p-b-70'>
            <div className='row'>
              <div className='col-sm-6 col-md-4 p-t-50'>
                {/* - */}
                <h4 className='txt13 m-b-33'>Contact Us</h4>
                <ul className='m-b-70'>
                  <li className='txt14 m-b-14'>
                    <i
                      className='fa fa-map-marker fs-16 dis-inline-block size19'
                      aria-hidden='true'
                    />
                    8th floor, 379 Hudson St, New York, NY 10018
                  </li>
                  <li className='txt14 m-b-14'>
                    <i className='fa fa-phone fs-16 dis-inline-block size19' aria-hidden='true' />
                    (+1) 96 716 6879
                  </li>
                  <li className='txt14 m-b-14'>
                    <i
                      className='fa fa-envelope fs-13 dis-inline-block size19'
                      aria-hidden='true'
                    />
                    contact@site.com
                  </li>
                </ul>
                {/* - */}
                <h4 className='txt13 m-b-32'>Opening Times</h4>
                <ul>
                  <li className='txt14'>09:30 AM – 11:00 PM</li>
                  <li className='txt14'>Every Day</li>
                </ul>
              </div>
              <div className='col-sm-6 col-md-4 p-t-50'>
                {/* - */}
                <h4 className='txt13 m-b-33'>Latest twitter</h4>
                <div className='m-b-25'>
                  <span className='fs-13 color2 m-r-5'>
                    <i className='fa fa-twitter' aria-hidden='true' />
                  </span>
                  <a href='#' className='txt15'>
                    @colorlib
                  </a>
                  <p className='txt14 m-b-18'>
                    Activello is a good option. It has a slider built into that displays the
                    featured image in the slider.
                    <a href='#' className='txt15'>
                      https://buff.ly/2zaSfAQ
                    </a>
                  </p>
                  <span className='txt16'>21 Dec 2017</span>
                </div>
                <div>
                  <span className='fs-13 color2 m-r-5'>
                    <i className='fa fa-twitter' aria-hidden='true' />
                  </span>
                  <a href='#' className='txt15'>
                    @colorlib
                  </a>
                  <p className='txt14 m-b-18'>
                    Activello is a good option. It has a slider built into that displays
                    <a href='#' className='txt15'>
                      https://buff.ly/2zaSfAQ
                    </a>
                  </p>
                  <span className='txt16'>21 Dec 2017</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 p-t-50'>
                {/* - */}
                <h4 className='txt13 m-b-38'>Gallery</h4>
                {/* Gallery footer */}
                <div className='wrap-gallery-footer flex-w'>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-01.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-01.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-02.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-02.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-03.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-03.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-04.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-04.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-05.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-05.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-06.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-06.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-07.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-07.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-08.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-08.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-09.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-09.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-10.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-10.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-11.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-11.jpg' alt='GALLERY' />
                  </a>
                  <a
                    className='item-gallery-footer wrap-pic-w'
                    href='images/photo-gallery-12.jpg'
                    data-lightbox='gallery-footer'>
                    <img src='images/photo-gallery-thumb-12.jpg' alt='GALLERY' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='end-footer bg2'>
            <div className='container'>
              <div className='flex-sb-m flex-w p-t-22 p-b-22'>
                <div className='p-t-5 p-b-5'>
                  <a href='#' className='fs-15 c-white'>
                    <i className='fa fa-tripadvisor' aria-hidden='true' />
                  </a>
                  <a href='#' className='fs-15 c-white'>
                    <i className='fa fa-facebook m-l-18' aria-hidden='true' />
                  </a>
                  <a href='#' className='fs-15 c-white'>
                    <i className='fa fa-twitter m-l-18' aria-hidden='true' />
                  </a>
                </div>
                <div className='txt17 p-r-20 p-t-5 p-b-5'>
                  Copyright © 2018 All rights reserved | This template is made with{' '}
                  <i className='fa fa-heart' /> by{' '}
                  <a href='https://colorlib.com' target='_blank'>
                    Colorlib
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Back to top */}
        <div className='btn-back-to-top bg0-hov' id='myBtn'>
          <span className='symbol-btn-back-to-top'>
            <i className='fa fa-angle-double-up' aria-hidden='true' />
          </span>
        </div>
        {/* Modal Video 01*/}
        <div
          className='modal fade'
          id='modal-video-01'
          tabIndex={-1}
          role='dialog'
          aria-hidden='true'>
          <div className='modal-dialog' role='document' data-dismiss='modal'>
            <div className='close-mo-video-01 trans-0-4' data-dismiss='modal' aria-label='Close'>
              ×
            </div>
            <div className='wrap-video-mo-01'>
              <div className='w-full wrap-pic-w op-0-0'>
                <img src='images/icons/video-16-9.jpg' alt='IMG' />
              </div>
              <div className='video-mo-01'>
                <iframe
                  src='https://www.youtube.com/embed/5k1hSu2gdKE?rel=0&showinfo=0'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
