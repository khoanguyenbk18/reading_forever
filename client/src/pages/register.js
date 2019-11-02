import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {register} from '../urls/user_apis';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      password: '',
      confirm_password: '',
      gender: ''
    };
    this.onRegister = this.onRegister.bind(this);
  }

  validateConfirmPassword = value => {
    if (this.state.password !== this.state.confirm_password) {
      return <span className='form-text text-danger'>Confirm Password not the same</span>;
    }
  };

  onRegister() {
    //check input validation

    if (isEmpty(this.state.gender)) {
      window.alert('Please select your gender');
      return;
    }

    if (this.state.password !== this.state.confirm_password) {
      window.alert('Confirm Password is not correct');
      return;
    }

    //Register Member
    const registerBody = {
      username: this.state.user_name,
      password: this.state.password,
      avatar: '',
      email: this.state.email,
      gender: this.state.gender
    };

    register(registerBody)
      .then(res => {
        console.log('TCL: Register -> onRegister -> res', res);
        localStorage.setItem('user', res.data);
        this.props.history.push('/');
      })
      .catch(err => {
        window.alert(err.response.data);
      });
  }

  render() {
    return (
      <div
        className='wrapper'
        style={{backgroundImage: 'url("images/bg-registration-form-1.jpg")'}}>
        <div className='inner'>
          <div className='image-holder'>
            <img src='images/registration-form-1.jpg' />
          </div>
          <form>
            <h3>Registration Form</h3>
            <div className='form-group'>
              <input
                type='text'
                placeholder='First Name'
                className='form-control'
                onChange={evt => {
                  this.setState({first_name: evt.target.value});
                }}
                value={this.state.first_name}
              />
              <input
                type='text'
                placeholder='Last Name'
                className='form-control'
                onChange={evt => {
                  this.setState({last_name: evt.target.value});
                }}
                value={this.state.last_name}
              />
            </div>
            <div className='form-wrapper'>
              <input
                type='text'
                placeholder='Username'
                className='form-control'
                onChange={evt => {
                  console.log('TCL: Register -> render -> value', evt.target.value);
                  this.setState({user_name: evt.target.value});
                }}
                value={this.state.user_name}
              />
              <i className='zmdi zmdi-account' />
            </div>
            <div className='form-wrapper'>
              <input
                type='text'
                placeholder='Email Address'
                className='form-control'
                onChange={evt => {
                  this.setState({email: evt.target.value});
                }}
                value={this.state.email}
              />
              <i className='zmdi zmdi-email' />
            </div>
            <div className='form-wrapper'>
              <select
                name
                id
                className='form-control'
                onChange={evt => {
                  this.setState({gender: evt.target.value});
                }}>
                <option value disabled selected>
                  Gender
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
              <i className='zmdi zmdi-caret-down' style={{fontSize: 17}} />
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
            <div className='form-wrapper'>
              <input
                type='password'
                placeholder='Confirm Password'
                className='form-control'
                onChange={evt => {
                  this.setState({confirm_password: evt.target.value});
                }}
                value={this.state.confirm_password}
              />
              <i className='zmdi zmdi-lock' />
            </div>
            <button type='button' onClick={this.onRegister}>
              Register
              <i className='zmdi zmdi-arrow-right' />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
