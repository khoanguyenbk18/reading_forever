import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ListPost from './list_post';
import PostDetail from './post_detail';
import About from './about';

import Header from '../components/header';
import SideBar from '../components/sidebar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <SideBar />
        <Route exact path='/' component={ListPost} />
        <Route exact path='/detail' component={PostDetail} />
        <Route exact path='/about' component={About} />
      </Router>
    );
  }
}
export default App;