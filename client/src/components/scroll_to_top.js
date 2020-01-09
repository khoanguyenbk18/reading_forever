import React from 'react';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    console.log('TCL: ScrollToTop -> componentDidUpdate -> prevProps', prevProps);
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 200);
    }
    else{
      window.location.reload();
    }
  }

  render() {
    return null;
  }
}
export default withRouter(ScrollToTop);
