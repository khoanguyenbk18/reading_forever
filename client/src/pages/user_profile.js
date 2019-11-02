import React, {Component} from 'react';
import {RoleEnum} from '../libs/enum';
import {Link} from 'react-router-dom';
import {Path} from '../libs/path';
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 16,
        username: 'imokesf',
        avatar: 'http://dummyimage.com/123x234.bmp/cc0000/ffffff',
        email: 'talmeidaf@google.pl',
        gender: 'Female',
        dob: '2019-04-15T17:00:00.000Z',
        role: 2,
        post_ids: [848],
        detail_posts: [
          {
            id: 848,
            title: 'Northwest Passage',
            image: 'https://picsum.photos/id/848/400/600',
            author: 'Ali Varney',
            publish_date: '2019-02-07',
            category: 11,
            content:
              'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
            comment_ids: 439,
            views_count: 8011,
            status: 1,
            post_creator_id: 572,
            created_date: '2019-02-05',
            document_vectors:
              "'accumsan':40 'ali':3 'aliquam':28 'amet':37 'ant':25 'condimentum':21 'diam':16 'dictumst':9 'eget':31 'elit':32 'erat':17 'ero':38 'fermentum':18 'habitass':7 'hac':6 'iaculi':15 'id':13 'justo':19,27 'mauri':35 'morbi':10 'nec':20 'nequ':22 'northwest':1 'nulla':26 'passag':2 'placerat':24 'platea':8 'pretium':14 'qui':29,42 'sapien':23 'scelerisqu':34 'sit':36 'sodal':33 'suspendiss':39 'tortor':41 'turpi':30,43 'varney':4 'velit':12 'vestibulum':11"
          }
        ],
        detail_notifications: [
          {
            id: 983,
            message:
              'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
            user_id: 16,
            post_id: 120
          }
        ]
      }
    };
    this.renderRole = this.renderRole.bind(this);
    this.renderListPosts = this.renderListPosts.bind(this);
    this.renderListNotifications = this.renderListNotifications.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
              <img className='img-fluid' src={item.image} alt />
              <Link className='light' to={linkPostDetail}>
                <img src='images/gallery/icon.png' alt />
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
        {/*================End Home Banner Area =================*/}
        {/*================Welcome Area =================*/}
        {/* <section className='welcome_area p_120'>
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
        </section> */}
        {/*================End Welcome Area =================*/}
        {/*================My Tabs Area =================*/}
        {/* <section className='mytabs_area p_120'>
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
        </section> */}
        {/*================End My Tabs Area =================*/}
        {/*================Feature Area =================*/}
        {/* <section className='feature_area p_120'>
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
        </section> */}
        {/*================End Feature Area =================*/}
        {/*================Home Gallery Area =================*/}
        <section className='home_gallery_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>My Latest Posts</h2>
              <p>Together We Share, Together We Develope.</p>
            </div>
          </div>
          <div className='container'>
            <div className='gallery_f_inner row imageGallery1'>{this.renderListPosts()}</div>
          </div>
        </section>
        {/*================End Home Gallery Area =================*/}
        {/*================Testimonials Area =================*/}
        <section className='testimonials_area p_120'>
          <div className='container'>
            <div className='main_title'>
              <h2>Notifications</h2>
              <p>The Information about your pending Post will show here</p>
            </div>
            <div className='testi_inner'>
              <div className='testi_slider owl-carousel'>{this.renderListNotifications()}</div>
            </div>
          </div>
        </section>
        {/*================End Testimonials Area =================*/}
      </div>
    ) : null;
  }
}

export default UserProfile;
