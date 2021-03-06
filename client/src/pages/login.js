import React, {Component} from 'react';
import {login} from '../urls/user_apis';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }

  login() {
    //check input validation
    const loginBody = {...this.state};
    console.log('TCL: Login -> login -> loginBody', loginBody);
    login(loginBody)
      .then(res => {
        console.log('TCL: Login -> login -> res', res);
        console.log('adksuhiu: ', typeof res.data[1])
        localStorage.setItem('user', JSON.stringify(res.data[0]));
        localStorage.setItem('count', JSON.stringify(res.data[1]));
        localStorage.setItem('report', JSON.stringify(res.data[2]));
        this.props.history.push('/');
      })
      .catch(err => {
        window.alert(err.response.data);
        console.log('TCL: Login -> login -> err', err);
      });
  }

  render() {
    return (
      <div
        className='wrapper'
        style={{backgroundImage: 'url("images/bg-registration-form-1.jpg")'}}>
        <div className='inner'>
          <div className='image-holder'>
            <img alt='' src='images/registration-form-1.jpg' />
          </div>
          <form>
            <h3>Login Form</h3>
            <div className='form-wrapper'>
              <input
                type='text'
                placeholder='Username'
                className='form-control'
                onChange={evt => {
                  console.log('TCL: Register -> render -> value', evt.target.value);
                  this.setState({username: evt.target.value});
                }}
                value={this.state.username}
              />
              <i className='zmdi zmdi-account' />
            </div>

            <div className='form-wrapper'>
              <input
                type='password'
                placeholder='Password'
                className='form-control'
                onChange={evt => {
                  this.setState({password: evt.target.value});
                }}
                value={this.state.password}
              />
              <i className='zmdi zmdi-lock' />
            </div>
            <button type='button' onClick={this.login}>
              Login
              <i className='zmdi zmdi-arrow-right' />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
