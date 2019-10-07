import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return <div className='App'>

	<div>
  <header>
    <div className="wrap-menu-header gradient1 trans-0-4">
      <div className="container h-full">
        <div className="wrap_header trans-0-3">
          <div className="logo">
            <a href="index.html">
              <img src="images/icons/logo.png" alt="IMG-LOGO" data-logofixed="images/icons/logo2.png" />
            </a>
          </div>
          <div className="wrap_menu p-l-45 p-l-0-xl">
            <nav className="menu">
              <ul className="main_menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="menu.html">Menu</a>
                </li>
                <li>
                  <a href="reservation.html">Reservation</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social flex-w flex-l-m p-r-20">
            <a href="#"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true" /></a>
            <button className="btn-show-sidebar m-l-33 trans-0-4" />
          </div>
        </div>
      </div>
    </div>
  </header>
  <aside className="sidebar trans-0-4">
    <button className="btn-hide-sidebar ti-close color0-hov trans-0-4" />
    <ul className="menu-sidebar p-t-95 p-b-70">
      <li className="t-center m-b-13">
        <a href="index.html" className="txt19">Home</a>
      </li>
      <li className="t-center m-b-13">
        <a href="menu.html" className="txt19">Menu</a>
      </li>
      <li className="t-center m-b-13">
        <a href="gallery.html" className="txt19">Gallery</a>
      </li>
      <li className="t-center m-b-13">
        <a href="about.html" className="txt19">About</a>
      </li>
      <li className="t-center m-b-13">
        <a href="blog.html" className="txt19">Blog</a>
      </li>
      <li className="t-center m-b-33">
        <a href="contact.html" className="txt19">Contact</a>
      </li>
      <li className="t-center">
        <a href="reservation.html" className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto">
          Reservation
        </a>
      </li>
    </ul>
    <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
      <h4 className="txt20 m-b-33">
        Gallery
      </h4>
      <div className="wrap-gallery-sidebar flex-w">
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-01.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-02.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-02.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-03.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-03.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-05.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-05.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-06.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-06.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-07.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-07.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-09.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-09.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-10.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-10.jpg" alt="GALLERY" />
        </a>
        <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-11.jpg" data-lightbox="gallery-footer">
          <img src="images/photo-gallery-thumb-11.jpg" alt="GALLERY" />
        </a>
      </div>
    </div>
  </aside>
  <section className="section-slide">
    <div className="wrap-slick1">
      <div className="slick1">
        <div className="item-slick1 item1-slick1" style={{backgroundImage: 'url(images/slide1-01.jpg)'}}>
          <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
            <span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
              Welcome to
            </span>
            <h2 className="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
              Pato Place
            </h2>
            <div className="wrap-btn-slide1 animated visible-false" data-appear="zoomIn">
              {/* Button1 */}
              <a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
                Look Menu
              </a>
            </div>
          </div>
        </div>
        <div className="item-slick1 item2-slick1" style={{backgroundImage: 'url(images/master-slides-02.jpg)'}}>
          <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
            <span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="rollIn">
              Welcome to
            </span>
            <h2 className="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="lightSpeedIn">
              Pato Place
            </h2>
            <div className="wrap-btn-slide1 animated visible-false" data-appear="slideInUp">
              <a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
                Look Menu
              </a>
            </div>
          </div>
        </div>
        <div className="item-slick1 item3-slick1" style={{backgroundImage: 'url(images/master-slides-01.jpg)'}}>
          <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
            <span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="rotateInDownLeft">
              Welcome to
            </span>
            <h2 className="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="rotateInUpRight">
              Pato Place
            </h2>
            <div className="wrap-btn-slide1 animated visible-false" data-appear="rotateIn">
              <a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
                Look Menu
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-slick1-dots" />
    </div>
  </section>
  <section className="section-welcome bg1-pattern p-t-120 p-b-105">
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-t-45 p-b-30">
          <div className="wrap-text-welcome t-center">
            <span className="tit2 t-center">
              Italian Restaurant
            </span>
            <h3 className="tit3 t-center m-b-35 m-t-5">
              Welcome
            </h3>
            <p className="t-center m-b-22 size3 m-l-r-auto">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
            </p>
            <a href="about.html" className="txt4">
              Our Story
              <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-6 p-b-30">
          <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
            <img src="images/our-story-01.jpg" alt="IMG-OUR" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-intro">
    <div className="header-intro parallax100 t-center p-t-135 p-b-158" style={{backgroundImage: 'url(images/bg-intro-01.jpg)'}}>
      <span className="tit2 p-l-15 p-r-15">
        Discover
      </span>
      <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">
        Pato Place
      </h3>
    </div>
    <div className="content-intro bg-white p-t-77 p-b-133">
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-t-30">
            <div className="blo1">
              <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                <a href="#"><img src="images/intro-01.jpg" alt="IMG-INTRO" /></a>
              </div>
              <div className="wrap-text-blo1 p-t-35">
                <a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                    Romantic Restaurant
                  </h4></a>
                <p className="m-b-20">
                  Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                </p>
                <a href="#" className="txt4">
                  Learn More
                  <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-t-30">
            <div className="blo1">
              <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                <a href="#"><img src="images/intro-02.jpg" alt="IMG-INTRO" /></a>
              </div>
              <div className="wrap-text-blo1 p-t-35">
                <a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                    Delicious Food
                  </h4></a>
                <p className="m-b-20">
                  Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna
                </p>
                <a href="#" className="txt4">
                  Learn More
                  <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-t-30">
            <div className="blo1">
              <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                <a href="#"><img src="images/intro-04.jpg" alt="IMG-INTRO" /></a>
              </div>
              <div className="wrap-text-blo1 p-t-35">
                <a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                    Red Wines You Love
                  </h4></a>
                <p className="m-b-20">
                  Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                </p>
                <a href="#" className="txt4">
                  Learn More
                  <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-ourmenu bg2-pattern p-t-115 p-b-120">
    <div className="container">
      <div className="title-section-ourmenu t-center m-b-22">
        <span className="tit2 t-center">
          Discover
        </span>
        <h3 className="tit5 t-center m-t-2">
          Our Menu
        </h3>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-sm-6">
              <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src="images/our-menu-01.jpg" alt="IMG-MENU" />
                <a href="#" className="btn2 flex-c-m txt5 ab-c-m size4">
                  Lunch
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src="images/our-menu-05.jpg" alt="IMG-MENU" />
                <a href="#" className="btn2 flex-c-m txt5 ab-c-m size5">
                  Dinner
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src="images/our-menu-13.jpg" alt="IMG-MENU" />
                <a href="#" className="btn2 flex-c-m txt5 ab-c-m size6">
                  Happy Hour
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-12">
              <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src="images/our-menu-08.jpg" alt="IMG-MENU" />
                <a href="#" className="btn2 flex-c-m txt5 ab-c-m size7">
                  Drink
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src="images/our-menu-10.jpg" alt="IMG-MENU" />
                <a href="#" className="btn2 flex-c-m txt5 ab-c-m size8">
                  Starters
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src="images/our-menu-16.jpg" alt="IMG-MENU" />
                <a href="#" className="btn2 flex-c-m txt5 ab-c-m size9">
                  Dessert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-event">
    <div className="wrap-slick2">
      <div className="slick2">
        <div className="item-slick2 item1-slick2" style={{backgroundImage: 'url(images/bg-event-01.jpg)'}}>
          <div className="wrap-content-slide2 p-t-115 p-b-208">
            <div className="container">
              <div className="title-event t-center m-b-52">
                <span className="tit2 p-l-15 p-r-15">
                  Upcomming
                </span>
                <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">
                  Events
                </h3>
              </div>
              <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="zoomIn">
                <a href="#" className="wrap-pic-blo2 bg1-blo2" style={{backgroundImage: 'url(images/event-02.jpg)'}}>
                  <div className="time-event size10 txt6 effect1">
                    <span className="txt-effect1 flex-c-m t-center">
                      08:00 PM Tuesday - 21 November 2018
                    </span>
                  </div>
                </a>
                <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                  <h4 className="tit7 t-center m-b-10">
                    Wines during specific nights
                  </h4>
                  <p className="t-center">
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                  </p>
                  <div className="flex-sa-m flex-w w-full m-t-40">
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 days">
                        25
                      </span>
                      <span className="dis-block t-center txt8">
                        Days
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 hours">
                        12
                      </span>
                      <span className="dis-block t-center txt8">
                        Hours
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 minutes">
                        59
                      </span>
                      <span className="dis-block t-center txt8">
                        Minutes
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 seconds">
                        56
                      </span>
                      <span className="dis-block t-center txt8">
                        Seconds
                      </span>
                    </div>
                  </div>
                  <a href="#" className="txt4 m-t-40">
                    View Details
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-slick2 item2-slick2" style={{backgroundImage: 'url(images/bg-event-02.jpg)'}}>
          <div className="wrap-content-slide2 p-t-115 p-b-208">
            <div className="container">
              <div className="title-event t-center m-b-52">
                <span className="tit2 p-l-15 p-r-15">
                  Upcomming
                </span>
                <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">
                  Events
                </h3>
              </div>
              <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="fadeInDown">
                <a href="#" className="wrap-pic-blo2 bg2-blo2" style={{backgroundImage: 'url(images/event-06.jpg)'}}>
                  <div className="time-event size10 txt6 effect1">
                    <span className="txt-effect1 flex-c-m">
                      08:00 PM Tuesday - 21 November 2018
                    </span>
                  </div>
                </a>
                <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                  <h4 className="tit7 t-center m-b-10">
                    Wines during specific nights
                  </h4>
                  <p className="t-center">
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                  </p>
                  <div className="flex-sa-m flex-w w-full m-t-40">
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 days">
                        25
                      </span>
                      <span className="dis-block t-center txt8">
                        Days
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 hours">
                        12
                      </span>
                      <span className="dis-block t-center txt8">
                        Hours
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 minutes">
                        59
                      </span>
                      <span className="dis-block t-center txt8">
                        Minutes
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 seconds">
                        56
                      </span>
                      <span className="dis-block t-center txt8">
                        Seconds
                      </span>
                    </div>
                  </div>
                  <a href="#" className="txt4 m-t-40">
                    View Details
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-slick2 item3-slick2" style={{backgroundImage: 'url(images/bg-event-04.jpg)'}}>
          <div className="wrap-content-slide2 p-t-115 p-b-208">
            <div className="container">
              <div className="title-event t-center m-b-52">
                <span className="tit2 p-l-15 p-r-15">
                  Upcomming
                </span>
                <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">
                  Events
                </h3>
              </div>
              <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="rotateInUpLeft">
                <a href="#" className="wrap-pic-blo2 bg3-blo2" style={{backgroundImage: 'url(images/event-01.jpg)'}}>
                  <div className="time-event size10 txt6 effect1">
                    <span className="txt-effect1 flex-c-m">
                      08:00 PM Tuesday - 21 November 2018
                    </span>
                  </div>
                </a>
                <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                  <h4 className="tit7 t-center m-b-10">
                    Wines during specific nights
                  </h4>
                  <p className="t-center">
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                  </p>
                  <div className="flex-sa-m flex-w w-full m-t-40">
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 days">
                        25
                      </span>
                      <span className="dis-block t-center txt8">
                        Days
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 hours">
                        12
                      </span>
                      <span className="dis-block t-center txt8">
                        Hours
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 minutes">
                        59
                      </span>
                      <span className="dis-block t-center txt8">
                        Minutes
                      </span>
                    </div>
                    <div className="size11 flex-col-c-m">
                      <span className="dis-block t-center txt7 m-b-2 seconds">
                        56
                      </span>
                      <span className="dis-block t-center txt8">
                        Seconds
                      </span>
                    </div>
                  </div>
                  <a href="#" className="txt4 m-t-40">
                    View Details
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-slick2-dots" />
    </div>
  </section>
  <section className="section-booking bg1-pattern p-t-100 p-b-110">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-b-30">
          <div className="t-center">
            <span className="tit2 t-center">
              Reservation
            </span>
            <h3 className="tit3 t-center m-b-35 m-t-2">
              Book table
            </h3>
          </div>
          <form className="wrap-form-booking">
            <div className="row">
              <div className="col-md-6">
                <span className="txt9">
                  Date
                </span>
                <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                  <input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date" />
                  <i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true" />
                </div>
                <span className="txt9">
                  Time
                </span>
                <div className="wrap-inputtime size12 bo2 bo-rad-10 m-t-3 m-b-23">
                  <select className="selection-1" name="time">
                    <option>9:00</option>
                    <option>9:30</option>
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                  </select>
                </div>
                <span className="txt9">
                  People
                </span>
                <div className="wrap-inputpeople size12 bo2 bo-rad-10 m-t-3 m-b-23">
                  <select className="selection-1" name="people">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>6 people</option>
                    <option>7 people</option>
                    <option>8 people</option>
                    <option>9 people</option>
                    <option>10 people</option>
                    <option>11 people</option>
                    <option>12 people</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <span className="txt9">
                  Name
                </span>
                <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                  <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                </div>
                <span className="txt9">
                  Phone
                </span>
                <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                  <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="phone" placeholder="Phone" />
                </div>
                <span className="txt9">
                  Email
                </span>
                <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                  <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="wrap-btn-booking flex-c-m m-t-6">
              <button type="submit" className="btn3 flex-c-m size13 txt11 trans-0-4">
                Book Table
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 p-b-30 p-t-18">
          <div className="wrap-pic-booking size2 bo-rad-10 hov-img-zoom m-l-r-auto">
            <img src="images/booking-01.jpg" alt="IMG-OUR" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-review p-t-115">
    <div className="title-review t-center m-b-2">
      <span className="tit2 p-l-15 p-r-15">
        Customers Say
      </span>
      <h3 className="tit8 t-center p-l-20 p-r-15 p-t-3">
        Review
      </h3>
    </div>
    <div className="wrap-slick3">
      <div className="slick3">
        <div className="item-slick3 item1-slick3">
          <div className="wrap-content-slide3 p-b-50 p-t-50">
            <div className="container">
              <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated visible-false" data-appear="zoomIn">
                <img src="images/avatar-01.jpg" alt="IGM-AVATAR" />
              </div>
              <div className="content-review m-t-33 animated visible-false" data-appear="fadeInUp">
                <p className="t-center txt12 size15 m-l-r-auto">
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                </p>
                <div className="star-review fs-18 color0 flex-c-m m-t-12">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                </div>
                <div className="more-review txt4 t-center animated visible-false m-t-32" data-appear="fadeInUp">
                  Marie Simmons ˗ New York
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-slick3 item2-slick3">
          <div className="wrap-content-slide3 p-b-50 p-t-50">
            <div className="container">
              <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated visible-false" data-appear="zoomIn">
                <img src="images/avatar-04.jpg" alt="IGM-AVATAR" />
              </div>
              <div className="content-review m-t-33 animated visible-false" data-appear="fadeInUp">
                <p className="t-center txt12 size15 m-l-r-auto">
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                </p>
                <div className="star-review fs-18 color0 flex-c-m m-t-12">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                </div>
                <div className="more-review txt4 t-center animated visible-false m-t-32" data-appear="fadeInUp">
                  Marie Simmons ˗ New York
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-slick3 item3-slick3">
          <div className="wrap-content-slide3 p-b-50 p-t-50">
            <div className="container">
              <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated visible-false" data-appear="zoomIn">
                <img src="images/avatar-05.jpg" alt="IGM-AVATAR" />
              </div>
              <div className="content-review m-t-33 animated visible-false" data-appear="fadeInUp">
                <p className="t-center txt12 size15 m-l-r-auto">
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                </p>
                <div className="star-review fs-18 color0 flex-c-m m-t-12">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                  <i className="fa fa-star p-l-1" aria-hidden="true" />
                </div>
                <div className="more-review txt4 t-center animated visible-false m-t-32" data-appear="fadeInUp">
                  Marie Simmons ˗ New York
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-slick3-dots m-t-30" />
    </div>
  </section>
  <section className="section-video parallax100" style={{backgroundImage: 'url(images/bg-cover-video-02.jpg)'}}>
    <div className="content-video t-center p-t-225 p-b-250">
      <span className="tit2 p-l-15 p-r-15">
        Discover
      </span>
      <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">
        Our Video
      </h3>
      <div className="btn-play ab-center size16 hov-pointer m-l-r-auto m-t-43 m-b-33" data-toggle="modal" data-target="#modal-video-01">
        <div className="flex-c-m sizefull bo-cir bgwhite color1 hov1 trans-0-4">
          <i className="fa fa-play fs-18 m-l-2" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
  <section className="section-blog bg-white p-t-115 p-b-123">
    <div className="container">
      <div className="title-section-ourmenu t-center m-b-22">
        <span className="tit2 t-center">
          Latest News
        </span>
        <h3 className="tit5 t-center m-t-2">
          The Blog
        </h3>
      </div>
      <div className="row">
        <div className="col-md-4 p-t-30">
          <div className="blo1">
            <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom pos-relative">
              <a href="blog-detail.html"><img src="images/blog-01.jpg" alt="IMG-INTRO" /></a>
              <div className="time-blog">
                21 Dec 2017
              </div>
            </div>
            <div className="wrap-text-blo1 p-t-35">
              <a href="blog-detail.html"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                  Best Places for Wine
                </h4></a>
              <p className="m-b-20">
                Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
              </p>
              <a href="blog-detail.html" className="txt4">
                Continue Reading
                <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-t-30">
          <div className="blo1">
            <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom pos-relative">
              <a href="blog-detail.html"><img src="images/blog-02.jpg" alt="IMG-INTRO" /></a>
              <div className="time-blog">
                15 Dec 2017
              </div>
            </div>
            <div className="wrap-text-blo1 p-t-35">
              <a href="blog-detail.html"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                  Eggs and Cheese
                </h4></a>
              <p className="m-b-20">
                Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat
              </p>
              <a href="blog-detail.html" className="txt4">
                Continue Reading
                <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-t-30">
          <div className="blo1">
            <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom pos-relative">
              <a href="blog-detail.html"><img src="images/blog-03.jpg" alt="IMG-INTRO" /></a>
              <div className="time-blog">
                12 Dec 2017
              </div>
            </div>
            <div className="wrap-text-blo1 p-t-35">
              <a href="blog-detail.html"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                  Style the Wedding Party
                </h4></a>
              <p className="m-b-20">
                Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
              </p>
              <a href="blog-detail.html" className="txt4">
                Continue Reading
                <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="section-signup bg1-pattern p-t-85 p-b-85">
    <form className="flex-c-m flex-w flex-col-c-m-lg p-l-5 p-r-5">
      <span className="txt5 m-10">
        Specials Sign up
      </span>
      <div className="wrap-input-signup size17 bo2 bo-rad-10 bgwhite pos-relative txt10 m-10">
        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email-address" placeholder="Email Adrress" />
        <i className="fa fa-envelope ab-r-m m-r-18" aria-hidden="true" />
      </div>
      <button type="submit" className="btn3 flex-c-m size18 txt11 trans-0-4 m-10">
        Sign-up
      </button>
    </form>
  </div>
  <footer className="bg1">
    <div className="container p-t-40 p-b-70">
      <div className="row">
        <div className="col-sm-6 col-md-4 p-t-50">
          <h4 className="txt13 m-b-33">
            Contact Us
          </h4>
          <ul className="m-b-70">
            <li className="txt14 m-b-14">
              <i className="fa fa-map-marker fs-16 dis-inline-block size19" aria-hidden="true" />
              8th floor, 379 Hudson St, New York, NY 10018
            </li>
            <li className="txt14 m-b-14">
              <i className="fa fa-phone fs-16 dis-inline-block size19" aria-hidden="true" />
              (+1) 96 716 6879
            </li>
            <li className="txt14 m-b-14">
              <i className="fa fa-envelope fs-13 dis-inline-block size19" aria-hidden="true" />
              contact@site.com
            </li>
          </ul>
          <h4 className="txt13 m-b-32">
            Opening Times
          </h4>
          <ul>
            <li className="txt14">
              09:30 AM – 11:00 PM
            </li>
            <li className="txt14">
              Every Day
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-4 p-t-50">
          <h4 className="txt13 m-b-33">
            Latest twitter
          </h4>
          <div className="m-b-25">
            <span className="fs-13 color2 m-r-5">
              <i className="fa fa-twitter" aria-hidden="true" />
            </span>
            <a href="#" className="txt15">
              @colorlib
            </a>
            <p className="txt14 m-b-18">
              Activello is a good option. It has a slider built into that displays the featured image in the slider.
              <a href="#" className="txt15">
                https://buff.ly/2zaSfAQ
              </a>
            </p>
            <span className="txt16">
              21 Dec 2017
            </span>
          </div>
          <div>
            <span className="fs-13 color2 m-r-5">
              <i className="fa fa-twitter" aria-hidden="true" />
            </span>
            <a href="#" className="txt15">
              @colorlib
            </a>
            <p className="txt14 m-b-18">
              Activello is a good option. It has a slider built into that displays
              <a href="#" className="txt15">
                https://buff.ly/2zaSfAQ
              </a>
            </p>
            <span className="txt16">
              21 Dec 2017
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 p-t-50">
          <h4 className="txt13 m-b-38">
            Gallery
          </h4>
          <div className="wrap-gallery-footer flex-w">
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-01.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-02.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-02.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-03.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-03.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-04.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-04.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-05.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-05.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-06.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-06.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-07.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-07.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-08.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-08.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-09.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-09.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-10.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-10.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-11.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-11.jpg" alt="GALLERY" />
            </a>
            <a className="item-gallery-footer wrap-pic-w" href="images/photo-gallery-12.jpg" data-lightbox="gallery-footer">
              <img src="images/photo-gallery-thumb-12.jpg" alt="GALLERY" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="end-footer bg2">
      <div className="container">
        <div className="flex-sb-m flex-w p-t-22 p-b-22">
          <div className="p-t-5 p-b-5">
            <a href="#" className="fs-15 c-white"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
            <a href="#" className="fs-15 c-white"><i className="fa fa-facebook m-l-18" aria-hidden="true" /></a>
            <a href="#" className="fs-15 c-white"><i className="fa fa-twitter m-l-18" aria-hidden="true" /></a>
          </div>
          <div className="txt17 p-r-20 p-t-5 p-b-5">
            Copyright © 2018 All rights reserved  |  This template is made with <i className="fa fa-heart" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="btn-back-to-top bg0-hov" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="fa fa-angle-double-up" aria-hidden="true" />
    </span>
  </div>
  <div id="dropDownSelect1" />
  <div className="modal fade" id="modal-video-01" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document" data-dismiss="modal">
      <div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">×</div>
      <div className="wrap-video-mo-01">
        <div className="w-full wrap-pic-w op-0-0"><img src="images/icons/video-16-9.jpg" alt="IMG" /></div>
        <div className="video-mo-01">
          <iframe src="https://www.youtube.com/embed/5k1hSu2gdKE?rel=0&showinfo=0" allowFullScreen />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>;
  }
}
export default App;
