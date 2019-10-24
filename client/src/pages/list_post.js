import ItemPost from '../components/item_post';
import React, {Component} from 'react';
import {getListPost} from '../urls/post_apis';
import axios from 'axios'
class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: []
    };
  }

  componentDidMount() {//se chay khi moi vua mount trang web
    getListPost()
      .then(res => { //res: cua server tra ve
        this.setState({listPosts: res.data}); //luu data cua server xuong client thong qua bien listPosts
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderListPost() {
    if (this.state.listPosts) {
      return this.state.listPosts.map((item, index) => {
        return <ItemPost key={index} post={item} />;
      });
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        {/* Title Page */}
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-title-page-03.jpg)'}}>
          <h2 className='tit6 t-center'>READING FOREVER</h2>
        </section>
        {/* Content page */}
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-lg-9'>
                <div className='p-t-80 p-b-124 bo5-r h-full p-r-50 p-r-0-md bo-none-md'>
                  {/* Block4 */}
                  {this.renderListPost()}
                  {/* Block4 */}
                  {/* Pagination */}
                  <div className='pagination flex-l-m flex-w m-l--6 p-t-25'>
                    <a href='#' className='item-pagination flex-c-m trans-0-4 active-pagination'>
                      1
                    </a>
                    <a href='#' className='item-pagination flex-c-m trans-0-4'>
                      2
                    </a>
                  </div>
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
                  {/* <div className='archive'>
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
                  </div> */}
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
export default ListPost;
