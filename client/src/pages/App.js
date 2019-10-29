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
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Header listPageHide={['/dashboard']} />
        <SideBar />
        <Route exact path={Path.LandingPage} component={ListPost} />
        <Route exact path={Path.CategoryPage} component={ListPostByCategory} />
        <Route exact path={Path.Detail} component={PostDetail} />
        <Route exact path={Path.About} component={About} />
        <Route exact path={Path.Register} component={Register} />
        <Route exact path={Path.Login} component={Login} />
        <Route exact path={Path.Dashboard} component={Dashboard} />
        <Route exact path={Path.UserProfle} component={UserProfile} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
