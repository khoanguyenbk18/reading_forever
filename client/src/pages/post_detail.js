import React, {Component} from 'react';
import Header from '../components/header';
import SideBar from '../components/sidebar';
class PostDetail extends Component {
  render() {
    return (
      <div>
        {/* Title Page */}
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-title-page-03.jpg)'}}>
          <h2 className='tit6 t-center'>Blog</h2>
        </section>
        {/* Content page */}
        <section>
          <div className='bread-crumb bo5-b p-t-17 p-b-17'>
            <div className='container'>
              <a href='index.html' className='txt27'>
                Home
              </a>
              <span className='txt29 m-l-10 m-r-10'>/</span>
              <a href='blog.html' className='txt27'>
                Blog
              </a>
              <span className='txt29 m-l-10 m-r-10'>/</span>
              <span className='txt29'>Cooking recipe delicious</span>
            </div>
          </div>
          <div className='container'>
            <div className='row '>
              <div className='col-md-8 col-lg-9'>
                <div className='p-t-80 p-b-124 bo5-r p-r-50 h-full p-r-0-md bo-none-md'>
                  {/* Block4 */}
                  <div className='blo4 p-b-63'>
                    {/* - */}
                    <div className='pic-blo4 hov-img-zoom bo-rad-10 pos-relative'>
                      <a href='blog-detail.html'>
                        <img src='images/blog-05.jpg' alt='IMG-BLOG' />
                      </a>
                      <div className='date-blo4 flex-col-c-m'>
                        <span className='txt30 m-b-4'>28</span>
                        <span className='txt31'>Dec, 2018</span>
                      </div>
                    </div>
                    {/* - */}
                    <div className='text-blo4 p-t-33'>
                      <h4 className='p-b-16'>
                        <a href='blog-detail.html' className='tit9'>
                          Cooking recipe Delicious
                        </a>
                      </h4>
                      <div className='txt32 flex-w p-b-24'>
                        <span>
                          by Admin
                          <span className='m-r-6 m-l-4'>|</span>
                        </span>
                        <span>
                          28 December, 2018
                          <span className='m-r-6 m-l-4'>|</span>
                        </span>
                        <span>
                          Cooking, Food
                          <span className='m-r-6 m-l-4'>|</span>
                        </span>
                        <span>8 Comments</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mi
                        sem. Nulla facilisi. Sed ultricies eros a nibh tempus, in sodales mi
                        vestibulum. Nullam quis dui ac nisl ultrices euismod et sit amet urna. Morbi
                        semper sapien quis ex tempor, sit amet scelerisque eros rhoncus. Cras
                        scelerisque auctor gravida. Nunc fermentum luctus rhoncus. Nulla vulputate
                        fermentum convallis. In quis pellentesque tortor. Cras metus nibh, gravida
                        vitae ante vel, finibus semper tellus. Nulla vel tincidunt magna. Morbi
                        tempor velit lectus, eu commodo quam volutpat vitae.
                      </p>
                    </div>
                  </div>
                  {/* Leave a comment */}
                  <form className='leave-comment p-t-10'>
                    <h4 className='txt33 p-b-14'>Leave a Comment</h4>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <textarea
                      className='bo-rad-10 size29 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-40'
                      name='commentent'
                      placeholder='Comment...'
                      defaultValue={''}
                    />
                    <div className='size30 bo2 bo-rad-10 m-t-3 m-b-20'>
                      <input
                        className='bo-rad-10 sizefull txt10 p-l-20'
                        type='text'
                        name='name'
                        placeholder='Name *'
                      />
                    </div>
                    <div className='size30 bo2 bo-rad-10 m-t-3 m-b-20'>
                      <input
                        className='bo-rad-10 sizefull txt10 p-l-20'
                        type='text'
                        name='email'
                        placeholder='Email *'
                      />
                    </div>
                    <div className='size30 bo2 bo-rad-10 m-t-3 m-b-30'>
                      <input
                        className='bo-rad-10 sizefull txt10 p-l-20'
                        type='text'
                        name='website'
                        placeholder='Website'
                      />
                    </div>
                    {/* Button3 */}
                    <button type='submit' className='btn3 flex-c-m size31 txt11 trans-0-4'>
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
              <div className='col-md-4 col-lg-3'>
                <div className='sidebar2 p-t-80 p-b-80 p-l-20 p-l-0-md p-t-0-md'>
                  {/* Search */}
                  <div className='search-sidebar2 size12 bo2 pos-relative'>
                    <input
                      className='input-search-sidebar2 txt10 p-l-20 p-r-55'
                      type='text'
                      name='search'
                      placeholder='Search'
                    />
                    <button className='btn-search-sidebar2 flex-c-m ti-search trans-0-4' />
                  </div>
                  {/* Categories */}
                  <div className='categories'>
                    <h4 className='txt33 bo5-b p-b-35 p-t-58'>Categories</h4>
                    <ul>
                      <li className='bo5-b p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          Cooking recipe
                        </a>
                      </li>
                      <li className='bo5-b p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          Delicious foods
                        </a>
                      </li>
                      <li className='bo5-b p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          Events Design
                        </a>
                      </li>
                      <li className='bo5-b p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          Restaurant Place
                        </a>
                      </li>
                      <li className='bo5-b p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          WordPress
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Most Popular */}
                  <div className='popular'>
                    <h4 className='txt33 p-b-35 p-t-58'>Most popular</h4>
                    <ul>
                      <li className='flex-w m-b-25'>
                        <div className='size16 bo-rad-10 wrap-pic-w of-hidden m-r-18'>
                          <a href='#'>
                            <img src='images/blog-11.jpg' alt='IMG-BLOG' />
                          </a>
                        </div>
                        <div className='size28'>
                          <a href='#' className='dis-block txt28 m-b-8'>
                            Best Places for Wine
                          </a>
                          <span className='txt14'>3 days ago</span>
                        </div>
                      </li>
                      <li className='flex-w m-b-25'>
                        <div className='size16 bo-rad-10 wrap-pic-w of-hidden m-r-18'>
                          <a href='#'>
                            <img src='images/blog-12.jpg' alt='IMG-BLOG' />
                          </a>
                        </div>
                        <div className='size28'>
                          <a href='#' className='dis-block txt28 m-b-8'>
                            Eggs and Cheese
                          </a>
                          <span className='txt14'>July 2, 2017</span>
                        </div>
                      </li>
                      <li className='flex-w m-b-25'>
                        <div className='size16 bo-rad-10 wrap-pic-w of-hidden m-r-18'>
                          <a href='#'>
                            <img src='images/blog-13.jpg' alt='IMG-BLOG' />
                          </a>
                        </div>
                        <div className='size28'>
                          <a href='#' className='dis-block txt28 m-b-8'>
                            Style the Wedding Party
                          </a>
                          <span className='txt14'>May 28, 2017</span>
                        </div>
                      </li>
                      <li className='flex-w m-b-25'>
                        <div className='size16 bo-rad-10 wrap-pic-w of-hidden m-r-18'>
                          <a href='#'>
                            <img src='images/blog-14.jpg' alt='IMG-BLOG' />
                          </a>
                        </div>
                        <div className='size28'>
                          <a href='#' className='dis-block txt28 m-b-8'>
                            Cooking recipe Delicious
                          </a>
                          <span className='txt14'>May 25, 2017</span>
                        </div>
                      </li>
                      <li className='flex-w m-b-25'>
                        <div className='size16 bo-rad-10 wrap-pic-w of-hidden m-r-18'>
                          <a href='#'>
                            <img src='images/blog-15.jpg' alt='IMG-BLOG' />
                          </a>
                        </div>
                        <div className='size28'>
                          <a href='#' className='dis-block txt28 m-b-8'>
                            Pizza is prepared fresh
                          </a>
                          <span className='txt14'>May 2, 2017</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Archive */}
                  <div className='archive'>
                    <h4 className='txt33 p-b-20 p-t-43'>Archive</h4>
                    <ul>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          uly 2018
                        </a>
                        <span className='txt29'>(9)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          June 2018
                        </a>
                        <span className='txt29'>(39)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          May 2018
                        </a>
                        <span className='txt29'>(29)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          April 2018
                        </a>
                        <span className='txt29'>(35)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          March 2018
                        </a>
                        <span className='txt29'>(22)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          February 2018
                        </a>
                        <span className='txt29'>(32)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          January 2018
                        </a>
                        <span className='txt29'>(21)</span>
                      </li>
                      <li className='flex-sb-m p-t-8 p-b-8'>
                        <a href='#' className='txt27'>
                          December 2017
                        </a>
                        <span className='txt29'>(26)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </div>
    );
  }
}
export default PostDetail;
