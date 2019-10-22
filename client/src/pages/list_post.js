import ItemPost from '../components/item_post';
import Category from '../components/categories';
import React, {Component} from 'react';
import {getListPost, getListCategories, getListMostPopular} from '../urls/post_apis';
import {Link} from 'react-router-dom';
import moment from 'moment';
class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: {
        data: null,
        pageNumber: 1,
        totalPage: 0
      },
      listCategories: [],
      listMostPopular: []
    };
  }

  componentDidMount() {
    getListPost(this.state.pageNumber)
      .then(res => {
        this.setState({listPosts: res.data}, () => {
          console.log('TCL: ListPost -> componentDidMount -> listPosts', this.state.listPosts);
        });
      })
      .catch(error => {
        console.log(error);
      });

    getListCategories()
      .then(res => {
        this.setState({listCategories: res.data});
      })
      .catch(err => {});

    getListMostPopular()
      .then(res => {
        this.setState({listMostPopular: res.data});
      })
      .catch(err => {});
  }

  renderListCategories() {
    if (this.state.listCategories) {
      return this.state.listCategories.map((item, index) => {
        return <Category key={index} category={item} />;
      });
    } else {
      return null;
    }
  }

  renderListPost() {
    if (this.state.listPosts.data) {
      return this.state.listPosts.data.map((item, index) => {
        return <ItemPost key={index} post={item} />;
      });
    } else {
      return null;
    }
  }

  renderMostPopular() {
    if (this.state.listMostPopular) {
      const getDatesBefore = created_date => {
        let hoursBefore = moment(created_date).fromNow();
        return `${hoursBefore}`;
      };

      return this.state.listMostPopular.map((item, index) => {
        const postDetailPage = {pathname: '/detail', state: {post: item}};
        return (
          <li key={index} className='flex-w m-b-25'>
            <div className='size16 bo-rad-10 wrap-pic-w of-hidden m-r-18'>
              <Link to={postDetailPage}>
                <img src={item.image} alt='IMG-BLOG' />
              </Link>
            </div>
            <div className='size28'>
              <Link to={postDetailPage} className='dis-block txt28 m-b-8'>
                {item.title}
              </Link>
              <span className='txt14'>{getDatesBefore(item.created_date)}</span>
            </div>
          </li>
        );
      });
    }
  }

  renderPagination() {
    let listPaging = [];
    for (let i = 0; i < this.state.listPosts.totalPage; i++) {
      listPaging.push(
        <Link
          onClick={() => {
            getListPost(i)
              .then(res => {
                console.log('TCL: renderPagination -> res', res);
                this.setState({listPosts: res.data});
              })
              .catch(err => {
                console.log(err);
              });
          }}
          className='item-pagination flex-c-m trans-0-4 active-pagination'>
          {i}
        </Link>
      );
    }
    return listPaging;
    // return (
    //   <div>
    //     <a href='#' className='item-pagination flex-c-m trans-0-4 active-pagination'>
    //       1
    //     </a>
    //     <a href='#' className='item-pagination flex-c-m trans-0-4'>
    //       2
    //     </a>
    //   </div>
    // );
  }

  render() {
    return (
      <div>
        {/* Title Page */}
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-registration-form-1.jpg)'}}>
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
                    {this.renderPagination()}
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
                    <ul>{this.renderListCategories()}</ul>
                  </div>
                  {/* Most Popular */}
                  <div className='popular'>
                    <h4 className='txt33 p-b-35 p-t-58'>Most popular</h4>
                    <ul>{this.renderMostPopular()}</ul>
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
      </div>
    );
  }
}
export default ListPost;
