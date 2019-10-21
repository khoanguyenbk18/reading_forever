import React, {Component} from 'react';
import moment from 'moment';
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }
  componentDidMount() {
    const post = this.props.location.state.post;
    console.log('TCL: PostDetail -> componentDidMount -> post', post);
    this.setState({post: post}, () => {
      console.log(this.state.post);
      // console.log(this.state.post.post.author);
    });
  }

  renderDateInMonth() {
    const day = moment(this.state.post.created_date).daysInMonth();
    return day;
  }

  renderMonthAndYear() {
    const month = moment(this.state.post.created_date).format('MMM');
    const year = moment(this.state.post.created_date).year();
    return month + ', ' + year;
  }

  renderDate() {
    const date = moment(this.state.post.created_date).format('MMM, DD YYYY');
    return date;
  }
  render() {
    return this.state.post ? (
      <div>
        {/* Title Page */}
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-title-page-03.jpg)'}}>
          <h2 className='tit6 t-center'>{this.state.post.author}</h2>
        </section>
        {/* Content page */}
        <section>
          <div className='container'>
            <div className='row '>
              <div className='col-md-8 col-lg-9'>
                <div className='p-t-80 p-b-124 bo5-r p-r-50 h-full p-r-0-md bo-none-md'>
                  {/* Block4 */}
                  <div className='blo4 p-b-63'>
                    {/* - */}
                    <div className='pic-blo4 hov-img-zoom bo-rad-10 pos-relative'>
                      <img src='images/blog-05.jpg' alt='IMG-BLOG' />
                      <div className='date-blo4 flex-col-c-m'>
                        <span className='txt30 m-b-4'>{this.renderDateInMonth()}</span>
                        <span className='txt31'>{this.renderMonthAndYear()}</span>
                      </div>
                    </div>
                    {/* - */}
                    <div className='text-blo4 p-t-33'>
                      <h4 className='p-b-16'>
                        <span className='tit9'>
                          {this.state.post.title} by {this.state.post.author}
                        </span>
                      </h4>
                      <div className='txt32 flex-w p-b-24'>
                        <span>
                          by {this.state.post.username}
                          <span className='m-r-6 m-l-4'>|</span>
                        </span>
                        <span>
                          {this.renderDate()}
                          <span className='m-r-6 m-l-4'>|</span>
                        </span>
                        <span>
                          Cooking, Food
                          <span className='m-r-6 m-l-4'>|</span>
                        </span>
                        <span>{this.state.post.views_count} Views</span>
                      </div>
                      <p>{this.state.post.content}</p>
                    </div>
                  </div>
                  {/* Leave a comment */}
                  <form className='leave-comment p-t-10'>
                    <h4 className='txt33 p-b-14'>Leave a Comment</h4>
                    <textarea
                      className='bo-rad-10 size29 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-40'
                      name='commentent'
                      placeholder='Comment...'
                      defaultValue={''}
                      onChange={evt => {
                        console.log(evt.target.value);
                      }}
                      // value={}
                    />
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
      </div>
    ) : null;
  }
}
export default PostDetail;
