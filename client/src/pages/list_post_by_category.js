import ItemPost from '../components/item_post';
import React, {Component} from 'react';
import {
  getListPost,
  getListMostPopular,
  getSearchListPost,
  getListPostByCategory
} from '../urls/post_apis';
import {Link} from 'react-router-dom';
import moment from 'moment';
class ListPostByCategory extends Component {
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
    this.onSearchPost = this.onSearchPost.bind(this);
    this.inputSearch = React.createRef();
  }

  componentDidMount() {
    console.log('category');
    const category = this.props.location.state.category;
    console.log('TCL: ListPostByCategory -> componentDidMount -> category', category);
    getListPostByCategory(category.id)
      .then(res => {
        this.setState({listPosts: res.data}, () => {});
      })
      .catch(error => {
        console.log(error);
      });

    // getListCategories()
    //   .then(res => {
    //     this.setState({listCategories: res.data});
    //   })
    //   .catch(err => {});

    getListMostPopular()
      .then(res => {
        this.setState({listMostPopular: res.data});
      })
      .catch(err => {});
  }

  // renderListCategories() {
  //   if (this.state.listCategories) {
  //     return this.state.listCategories.map((item, index) => {
  //       return <Category key={index} category={item} />;
  //     });
  //   } else {
  //     return null;
  //   }
  // }

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
  }

  onSearchPost() {
    console.log('Value text search');
    // console.log(this.inputSearch.current.value);
    const queryString = this.inputSearch.current.value;
    if (queryString) {
      getSearchListPost(queryString)
        .then(res => {
          console.log('TCL: ListPost -> onSearchPost -> res', res);
          this.setState({listPosts: res}, () => {});
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      getListPost(1)
        .then(res => {
          this.setState({listPosts: res.data}, () => {});
        })
        .catch(error => {
          console.log(error);
        });
    }
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
                      ref={this.inputSearch}
                    />
                    <button
                      className='btn-search-sidebar2 flex-c-m ti-search trans-0-4'
                      type='button'
                      onClick={this.onSearchPost}
                    />
                  </div>
                  {/* Most Popular */}
                  <div className='popular'>
                    <h4 className='txt33 p-b-35 p-t-58'>Most popular</h4>
                    <ul>{this.renderMostPopular()}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ListPostByCategory;
