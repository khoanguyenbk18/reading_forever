import React, {Component} from 'react';
import {RoleEnum} from '../libs/enum';
import {Link} from 'react-router-dom';
import {Path} from '../libs/path';
import {getProfile} from '../urls/user_apis';
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.renderRole = this.renderRole.bind(this);
    this.renderListPosts = this.renderListPosts.bind(this);
    this.renderListNotifications = this.renderListNotifications.bind(this);
  }

  componentDidMount() {
    getProfile()
      .then(res => {
        console.log('TCL: UserProfile -> componentDidMount -> res', res);
        this.setState({user: res.data}, () => {
          window.scrollTo(0, 0);
        });
      })
      .catch(err => {
        console.log('TCL: UserProfile -> componentDidMount -> err', err);
      });
  }

  renderRole() {
    return Object.keys(RoleEnum)[this.state.user.role];
  }

  renderListPosts() {
    return this.state.user.detail_posts.map((item, index) => {
      console.log('TCL: UserProfile -> renderListPosts -> item', item);
      const linkPostDetail = {pathname: Path.Detail, state: {post: item}};
      return (
        <div className='col-lg-4 col-md-4 col-sm-6 brand manipul design print' key={index}>
          <div className='h_gallery_item'>
            <div className='g_img_item'>
              <img className='img-fluid' src={item.image} alt='' />
              <Link className='light' to={linkPostDetail}>
                <img src='images/gallery/icon.png' alt='' />
              </Link>
            </div>
            <div className='g_item_text'>
              <h4>{item.title}</h4>
              <p>{item.author}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  renderListNotifications() {
    return this.state.user.detail_notifications.map((item, index) => {
      return (
        <div className='item' key={index}>
          <div className='testi_item'>
            <p>{item.message}</p>
            <h4>Admin</h4>
          </div>
        </div>
      );
    });
  }

  render() {
    return this.state.user ? (
      <div>
        {/*================Home Banner Area =================*/}
        <section className='home_banner_area'>
          <div className='container box_1620'>
            <div className='banner_inner d-flex align-items-center'>
              <div className='banner_content'>
                <div className='media'>
                  <div className='d-flex'>
                    <img src={this.state.user.avatar} alt='' />
                  </div>
                  <div className='media-body'>
                    <div className='personal_text'>
                      <h6>Username</h6>
                      <h3>{this.state.user.username}</h3>
                      <h4>{this.renderRole()}</h4>
                      <ul className='list basic_info'>
                        <li>
                          <i className='lnr lnr-calendar-full' />
                          Email: {this.state.user.email}
                        </li>
                        <li>
                          <i className='lnr lnr-phone-handset' />
                          Gender: {this.state.user.gender}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='home_gallery_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>My Latest Posts</h2>
              <p>Together We Share.</p>
            </div>
          </div>
          <div className='container'>
            {this.state.user.detail_posts[0] !== null ? (
              <div className='gallery_f_inner row imageGallery1'>{this.renderListPosts()}</div>
            ) : (
              <div className='main_title'>There is no post</div>
            )}
          </div>
        </section>
        {/*================Testimonials Area =================*/}
        <section className='testimonials_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>Notifications</h2>
              <p>The Information about your pending Post will show here</p>
            </div>
            <div className='testi_inner'>
              {this.state.user.detail_notifications[0] !== null ? (
                <div className='testi_slider owl-carousel'>{this.renderListNotifications()}</div>
              ) : (
                <div className='main_title'>There is no notification.</div>
              )}
            </div>
          </div>
        </section>
        {/*================End Testimonials Area =================*/}
      </div>
    ) : null;
  }
}

export default UserProfile;
