import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <header className='header_area'>
          <div className='main_menu'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <div className='container box_1620'>
                {/* Brand and toggle get grouped for better mobile display */}
                <a className='navbar-brand logo_h' href='index.html'>
                  <img src='images/logo.png' alt />
                </a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                </button>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className='collapse navbar-collapse offset' id='navbarSupportedContent'>
                  <ul className='nav navbar-nav menu_nav ml-auto'>
                    <li className='nav-item active'>
                      <a className='nav-link' href='index.html'>
                        Home
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='about-us.html'>
                        About
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='services.html'>
                        Services
                      </a>
                    </li>
                    <li className='nav-item submenu dropdown'>
                      <a
                        href='#'
                        className='nav-link dropdown-toggle'
                        data-toggle='dropdown'
                        role='button'
                        aria-haspopup='true'
                        aria-expanded='false'>
                        Pages
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a className='nav-link' href='portfolio.html'>
                            Portfolio
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='nav-link' href='elements.html'>
                            Elements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item submenu dropdown'>
                      <a
                        href='#'
                        className='nav-link dropdown-toggle'
                        data-toggle='dropdown'
                        role='button'
                        aria-haspopup='true'
                        aria-expanded='false'>
                        Blog
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a className='nav-link' href='blog.html'>
                            Blog
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='nav-link' href='single-blog.html'>
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='contact.html'>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/*================Header Menu Area =================*/}
        {/*================Home Banner Area =================*/}
        <section className='home_banner_area'>
          <div className='container box_1620'>
            <div className='banner_inner d-flex align-items-center'>
              <div className='banner_content'>
                <div className='media'>
                  <div className='d-flex'>
                    <img src='images/personal.jpg' alt />
                  </div>
                  <div className='media-body'>
                    <div className='personal_text'>
                      <h6>Hello Everybody, i am</h6>
                      <h3>Donald McKinney</h3>
                      <h4>Junior UI/UX Developer</h4>
                      <p>
                        You will begin to realise why this exercise is called the Dickens Pattern
                        (with reference to the ghost showing Scrooge some different futures)
                      </p>
                      <ul className='list basic_info'>
                        <li>
                          <a href='#'>
                            <i className='lnr lnr-calendar-full' /> 31st December, 1992
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='lnr lnr-phone-handset' /> 44 (012) 6954 783
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='lnr lnr-envelope' /> businessplan@donald
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='lnr lnr-home' /> Santa monica bullevard
                          </a>
                        </li>
                      </ul>
                      <ul className='list personal_social'>
                        <li>
                          <a href='#'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Home Banner Area =================*/}
        {/*================Welcome Area =================*/}
        <section className='welcome_area p_120'>
          <div className='container'>
            <div className='row welcome_inner'>
              <div className='col-lg-6'>
                <div className='welcome_text'>
                  <h4>About Myself</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be boys,” women face
                    higher conduct standards especially in the workplace. That’s why it’s crucial
                    that, as women, our behavior on the job is beyond reproach. inappropriate
                    behavior is often laughed.
                  </p>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='wel_item'>
                        <i className='lnr lnr-database' />
                        <h4>$2.5M</h4>
                        <p>Total Donation</p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='wel_item'>
                        <i className='lnr lnr-book' />
                        <h4>1465</h4>
                        <p>Total Projects</p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='wel_item'>
                        <i className='lnr lnr-users' />
                        <h4>3965</h4>
                        <p>Total Volunteers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='tools_expert'>
                  <div className='skill_main'>
                    <div className='skill_item'>
                      <h4>
                        After Effects <span className='counter'>85</span>%
                      </h4>
                      <div className='progress_br'>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='skill_item'>
                      <h4>
                        Photoshop <span className='counter'>90</span>%
                      </h4>
                      <div className='progress_br'>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='skill_item'>
                      <h4>
                        Illustrator <span className='counter'>70</span>%
                      </h4>
                      <div className='progress_br'>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='skill_item'>
                      <h4>
                        Sublime <span className='counter'>95</span>%
                      </h4>
                      <div className='progress_br'>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='skill_item'>
                      <h4>
                        Sketch <span className='counter'>75</span>%
                      </h4>
                      <div className='progress_br'>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Welcome Area =================*/}
        {/*================My Tabs Area =================*/}
        <section className='mytabs_area p_120'>
          <div className='container'>
            <div className='tabs_inner'>
              <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='home-tab'
                    data-toggle='tab'
                    href='#home'
                    role='tab'
                    aria-controls='home'
                    aria-selected='true'>
                    My Experiences
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='profile-tab'
                    data-toggle='tab'
                    href='#profile'
                    role='tab'
                    aria-controls='profile'
                    aria-selected='false'>
                    My Education
                  </a>
                </li>
              </ul>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'>
                  <ul className='list'>
                    <li>
                      <span />
                      <div className='media'>
                        <div className='d-flex'>
                          <p>March 2017 to present</p>
                        </div>
                        <div className='media-body'>
                          <h4>Colorlib</h4>
                          <p>
                            Senior Web Developer <br />
                            Santa monica, Los angeles
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className='media'>
                        <div className='d-flex'>
                          <p>March 2017 to present</p>
                        </div>
                        <div className='media-body'>
                          <h4>Colorlib</h4>
                          <p>
                            Senior Web Developer <br />
                            Santa monica, Los angeles
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className='media'>
                        <div className='d-flex'>
                          <p>March 2017 to present</p>
                        </div>
                        <div className='media-body'>
                          <h4>Colorlib</h4>
                          <p>
                            Senior Web Developer <br />
                            Santa monica, Los angeles
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className='tab-pane fade'
                  id='profile'
                  role='tabpanel'
                  aria-labelledby='profile-tab'>
                  <ul className='list'>
                    <li>
                      <span />
                      <div className='media'>
                        <div className='d-flex'>
                          <p>March 2017 to present</p>
                        </div>
                        <div className='media-body'>
                          <h4>Colorlib</h4>
                          <p>
                            Senior Web Developer <br />
                            Santa monica, Los angeles
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className='media'>
                        <div className='d-flex'>
                          <p>March 2017 to present</p>
                        </div>
                        <div className='media-body'>
                          <h4>Colorlib</h4>
                          <p>
                            Senior Web Developer <br />
                            Santa monica, Los angeles
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className='media'>
                        <div className='d-flex'>
                          <p>March 2017 to present</p>
                        </div>
                        <div className='media-body'>
                          <h4>Colorlib</h4>
                          <p>
                            Senior Web Developer <br />
                            Santa monica, Los angeles
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End My Tabs Area =================*/}
        {/*================Feature Area =================*/}
        <section className='feature_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>offerings to my clients</h2>
              <p>
                If you are looking at blank cassettes on the web, you may be very confused at the
                difference in price. You may see some for as low as $.17 each.
              </p>
            </div>
            <div className='feature_inner row'>
              <div className='col-lg-4 col-md-6'>
                <div className='feature_item'>
                  <i className='flaticon-city' />
                  <h4>Architecture</h4>
                  <p>
                    If you are looking at blank cassettes on the web, you may be very confused at
                    the difference in price. You may see some for as low as $17 each.
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='feature_item'>
                  <i className='flaticon-skyline' />
                  <h4>Interior Design</h4>
                  <p>
                    If you are looking at blank cassettes on the web, you may be very confused at
                    the difference in price. You may see some for as low as $17 each.
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='feature_item'>
                  <i className='flaticon-sketch' />
                  <h4>Concept Design</h4>
                  <p>
                    If you are looking at blank cassettes on the web, you may be very confused at
                    the difference in price. You may see some for as low as $17 each.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Feature Area =================*/}
        {/*================Home Gallery Area =================*/}
        <section className='home_gallery_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>Our Latest Featured Projects</h2>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='isotope_fillter'>
              <ul className='gallery_filter list'>
                <li className='active' data-filter='*'>
                  <a href='#'>All</a>
                </li>
                <li data-filter='.brand'>
                  <a href='#'>Vector</a>
                </li>
                <li data-filter='.manipul'>
                  <a href='#'>Raster</a>
                </li>
                <li data-filter='.creative'>
                  <a href='#'>UI/UX</a>
                </li>
                <li data-filter='.design'>
                  <a href='#'>Printing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='gallery_f_inner row imageGallery1'>
              <div className='col-lg-4 col-md-4 col-sm-6 brand manipul design print'>
                <div className='h_gallery_item'>
                  <div className='g_img_item'>
                    <img className='img-fluid' src='images/gallery/project-1.jpg' alt />
                    <a className='light' href='images/gallery/project-1.jpg'>
                      <img src='images/gallery/icon.png' alt />
                    </a>
                  </div>
                  <div className='g_item_text'>
                    <h4>3D Helmet Design</h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 brand manipul creative'>
                <div className='h_gallery_item'>
                  <div className='g_img_item'>
                    <img className='img-fluid' src='images/gallery/project-2.jpg' alt />
                    <a className='light' href='images/gallery/project-2.jpg'>
                      <img src='images/gallery/icon.png' alt />
                    </a>
                  </div>
                  <div className='g_item_text'>
                    <h4>2D Vinyl Design</h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 manipul creative design print'>
                <div className='h_gallery_item'>
                  <div className='g_img_item'>
                    <img className='img-fluid' src='images/gallery/project-3.jpg' alt />
                    <a className='light' href='images/gallery/project-3.jpg'>
                      <img src='images/gallery/icon.png' alt />
                    </a>
                  </div>
                  <div className='g_item_text'>
                    <h4>Creative Poster Design</h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 brand creative print'>
                <div className='h_gallery_item'>
                  <div className='g_img_item'>
                    <img className='img-fluid' src='images/gallery/project-4.jpg' alt />
                    <a className='light' href='images/gallery/project-4.jpg'>
                      <img src='images/gallery/icon.png' alt />
                    </a>
                  </div>
                  <div className='g_item_text'>
                    <h4>Embosed Logo Design</h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 brand manipul design'>
                <div className='h_gallery_item'>
                  <div className='g_img_item'>
                    <img className='img-fluid' src='images/gallery/project-5.jpg' alt />
                    <a className='light' href='images/gallery/project-5.jpg'>
                      <img src='images/gallery/icon.png' alt />
                    </a>
                  </div>
                  <div className='g_item_text'>
                    <h4>3D Disposable Bottle</h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 brand creative'>
                <div className='h_gallery_item'>
                  <div className='g_img_item'>
                    <img className='img-fluid' src='images/gallery/project-6.jpg' alt />
                    <a className='light' href='images/gallery/project-6.jpg'>
                      <img src='images/gallery/icon.png' alt />
                    </a>
                  </div>
                  <div className='g_item_text'>
                    <h4>3D Logo Design</h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='more_btn'>
              <a className='main_btn' href='#'>
                Load More Items
              </a>
            </div>
          </div>
        </section>
        {/*================End Home Gallery Area =================*/}
        {/*================Testimonials Area =================*/}
        <section className='testimonials_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>Testimonials</h2>
              <p>
                If you are looking at blank cassettes on the web, you may be very confused at the
                difference in price. You may see some for as low as $.17 each.
              </p>
            </div>
            <div className='testi_inner'>
              <div className='testi_slider owl-carousel'>
                <div className='item'>
                  <div className='testi_item'>
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear
                      Mother Earth. If you think about it, you travel across her face
                    </p>
                    <h4>Fanny Spencer</h4>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star-half-o' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='testi_item'>
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear
                      Mother Earth. If you think about it, you travel across her face
                    </p>
                    <h4>Fanny Spencer</h4>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star-half-o' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='testi_item'>
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear
                      Mother Earth. If you think about it, you travel across her face
                    </p>
                    <h4>Fanny Spencer</h4>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-star-half-o' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Testimonials Area =================*/}
        {/*================Footer Area =================*/}
        <footer className='footer_area p_120'>
          <div className='container'>
            <div className='row footer_inner'>
              <div className='col-lg-5 col-sm-6'>
                <aside className='f_widget ab_widget'>
                  <div className='f_title'>
                    <h3>About Me</h3>
                  </div>
                  <p>
                    Do you want to be even more successful? Learn to love learning and growth. The
                    more effort you put into improving your skills,
                  </p>
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{' '}
                    <i className='fa fa-heart-o' aria-hidden='true' /> by{' '}
                    <a href='https://colorlib.com' target='_blank'>
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </aside>
              </div>
              <div className='col-lg-5 col-sm-6'>
                <aside className='f_widget news_widget'>
                  <div className='f_title'>
                    <h3>Newsletter</h3>
                  </div>
                  <p>Stay updated with our latest trends</p>
                  <div id='mc_embed_signup'>
                    <form
                      target='_blank'
                      action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01'
                      method='get'
                      className='subscribe_form relative'>
                      <div className='input-group d-flex flex-row'>
                        <input
                          name='EMAIL'
                          placeholder='Enter email address'
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Email Address '"
                          required
                          type='email'
                        />
                        <button className='btn sub-btn'>
                          <span className='lnr lnr-arrow-right' />
                        </button>
                      </div>
                      <div className='mt-10 info' />
                    </form>
                  </div>
                </aside>
              </div>
              <div className='col-lg-2'>
                <aside className='f_widget social_widget'>
                  <div className='f_title'>
                    <h3>Follow Me</h3>
                  </div>
                  <p>Let us be social</p>
                  <ul className='list'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-dribbble' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-behance' />
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default UserProfile;
