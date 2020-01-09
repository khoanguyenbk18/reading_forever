import ItemPost from '../components/item_post';
import Category from '../components/categories';
import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button";
import {
  getListPost,
  getListCategories,
  getListMostPopular,
  getSearchListPost
} from '../urls/post_apis';
import {Link} from 'react-router-dom';
import moment from 'moment';
class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: {
        data: null,
        totalPage: 0
      },
      listSearch: null,
      listCategories: [],
      listMostPopular: [],
      currentPage: 1,
      pageLength: 5
    };
    this.onSearchPost = this.onSearchPost.bind(this);
    this.inputSearch = React.createRef();
  }
  componentDidMount() {
    getListPost(this.state.currentPage)
      .then(res => {
        this.setState({listPosts: res.data}, () => {});
        console.log('TCL -> list_detail -> getlistpost ->',this.state)
      })
      .catch(error => {
        console.log(error);
      });
    getListCategories()
      .then(res => {
        localStorage.setItem('categories', JSON.stringify(res.data));
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
    console.log('TCL -> list_detail -> renderpost ->',this.state)
    if (this.state.listSearch){
      return this.state.listSearch.map((item, index) => {
        return <ItemPost key={index} post={item} />;
      });
    }
    if (this.state.listPosts.data && !this.state.listSearch) {
      if (this.state.listPosts.data.length > 0) {
        return this.state.listPosts.data.map((item, index) => {
          return <ItemPost key={index} post={item} />;
        });
      } else {
        return <h2>THERE IS NOT POST</h2>;
      }
    } 
    else {
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

  onPrevPage = (e) =>{
    if(this.state.currentPage === 1) return;
    else{
      this.setState({
        currentPage: this.state.currentPage - 1
      });
      getListPost(this.state.currentPage)
      .then(res => {
        getListPost(this.state.currentPage)
        .then(res => {
          this.setState({listPosts: res.data}, () => {});
        })
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  onNextPage = (e) => {
    if(this.state.currentPage > this.state.listPosts.totalPage - 1) return;
    else{
      this.setState({
        currentPage: this.state.currentPage + 1
      });
      getListPost(this.state.currentPage)
      .then(res => {
        getListPost(this.state.currentPage)
        .then(res => {
          this.setState({listPosts: res.data}, () => {});
        })
      })
      .catch(err => {
        console.log(err);
      });
      // this.renderListPost()
    }
  }

  onSearchPost() {
    console.log('Value text search');
    // console.log(this.inputSearch.current.value);
    const queryString = this.inputSearch.current.value;
    if (queryString) {
      getSearchListPost(queryString)
        .then(res => {
          this.setState({listSearch: res.data}, () => {});
        })
        .catch(err => {
          console.log(err);
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
                    {/* {this.renderPagination()} */}
                    <button key="prev"
                      // hidden
                      className="pagination-btn prev"
                      onClick={this.onPrevPage}
                      style ={{float:"left"}}>
                      {"<-"}
                    </button>
                    <text style={{float:"center", background:"black"}}>
                      {this.state.currentPage}/{this.state.listPosts.totalPage}
                    </text>
                    <button key="next"
                      className="pagination-btn next"
                      onClick={this.onNextPage}
                      style ={{float:"right"}}>
                      {"->"}
                    </button>
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
                  <div>
                  <ScrollUpButton />
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
export default ListPost;
