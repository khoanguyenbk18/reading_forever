import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ListPost from './list_post';
import ListPostByCategory from './list_post_by_category';
import PostDetail from './post_detail';
import About from './about';

import Header from '../components/header';
import SideBar from '../components/sidebar';
import Footer from '../components/footer';
import Register from './register';
import Login from './login';
import Dashboard from './dashboard';
import UserProfile from './user_profile';
import {Path} from '../libs/path';
import ScrollToTop from '../components/scroll_to_top';
import AdminRoute from '../components/admin_route';
import PrivateRoute from '../components/private_route';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Header listPageHide={['/dashboard']} />
        <SideBar />
        <Route exact path={Path.LandingPage} component={ListPost} />
        <Route path={Path.CategoryPage} component={ListPostByCategory} />
        <Route path={Path.Detail} component={PostDetail} />
        <Route path={Path.About} component={About} />
        <Route path={Path.Register} component={Register} />
        <Route path={Path.Login} component={Login} />
        <PrivateRoute path={Path.UserProfle} component={UserProfile} />
        <AdminRoute component={Dashboard} path={Path.Dashboard} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
