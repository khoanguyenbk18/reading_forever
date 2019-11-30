import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import ListPost from './list_post';
import ListPostByCategory from './list_post_by_category';
import PostDetail from './post_detail';

import Header from '../components/header';
import SideBar from '../components/sidebar';
import Footer from '../components/footer';
import Register from './register';
import Login from './login';
import Dashboard from './dashboard';
import UserProfile from './user_profile';
import EditProfile from './edit_user_profile';
import CreatePost from './create_post';
import Report from './report';
import {Path} from '../libs/path';
import ScrollToTop from '../components/scroll_to_top';
import AdminRoute from '../components/admin_route';
import PrivateRoute from '../components/private_route';

import '../services/firebase';
class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <ScrollToTop />
        <Header listPageHide={['/dashboard']} />
        <SideBar />
        <Route exact path={Path.LandingPage} component={ListPost} />
        <Route path={Path.CategoryPage} component={ListPostByCategory} />
        <Route path={Path.Detail} component={PostDetail} />
        <Route path={Path.Register} component={Register} />
        <Route path={Path.Login} component={Login} />
        <PrivateRoute path={Path.UserProfle} component={UserProfile} />
        <PrivateRoute path={Path.EditProfile} component={EditProfile} />
        <PrivateRoute path={Path.CreatePost} component={CreatePost} />
        <AdminRoute component={Dashboard} path={Path.Dashboard} />
        <AdminRoute component={Report} path={Path.Report} />
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
