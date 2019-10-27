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

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Header
          onLogout={() => {
            // this.props.history.push('/');
          }}
        />
        <SideBar />
        <Route exact path='/' component={ListPost} />
        <Route exact path='/category/:categoryName' component={ListPostByCategory} />
        <Route exact path='/detail' component={PostDetail} />
        <Route exact path='/about' component={About} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
