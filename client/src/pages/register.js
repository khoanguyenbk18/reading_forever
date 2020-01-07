import React, {Component} from 'react';
import {register} from '../urls/user_apis';
import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';
import {isEmail, isEmpty, contains} from 'validator';
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
      gender: '',
      errors: {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        confirm_password: ''
      }
    };
    this.onRegister = this.onRegister.bind(this);
    this.validateRequire = this.validateRequire.bind(this);
    this.validateMinLength = this.validateMinLength.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateContainsSpace = this.validateContainsSpace.bind(this);
    this.validateConfirmPassword = this.validateConfirmPassword.bind(this);
  }
  validateConfirmPassword = value => {
    if (this.state.password !== this.state.confirm_password) {
      return <span className='form-text text-danger'>Confirm Password not the same</span>;
    }
  };
  validateContainsSpace = value => {
    if (value !== '') {
      if (contains(value, ' ')) {
        return <span className='form-text text-danger'>Must not contains spaces</span>;
      }
    }
  };
  validateEmail = value => {
    if (!isEmail(value)) {
      return <span className='form-text text-danger'>Invalid email format</span>;
    }
  };
  validateRequire = value => {
    if (isEmpty(value)) {
      return <span className='form-text text-danger'>This field is required</span>;
    }
  };
  validateMinLength = value => {
    if (value.trim().length < 6) {
      return (
        <span className='form-text text-danger'>Password must be at least 6 characters long</span>
      );
    }
  };
  onRegister() {
    //check input validation
    console.log(this.state);
    if (
      // isEmpty(this.state.first_name) ||
      // isEmpty(this.state.last_name) ||
      isEmpty(this.state.user_name) ||
      isEmpty(this.state.email) ||
      isEmpty(this.state.gender) ||
      isEmpty(this.state.password) ||
      isEmpty(this.state.confirm_password)
    ) {
      window.alert('Please fill out the form');
      return;
    }

    if (contains(this.state.user_name, ' ')) {
      window.alert('Username not contains spaces');
      return;
    }

    if (!isEmail(this.state.email)) {
      window.alert('Email is not valid');
      return;
    }

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
        localStorage.setItem('user', JSON.stringify(res.data));
        this.props.history.push('/');
      })
      .catch(err => {
        window.alert(err.response.data);
      });
  }

  // checkInputFirstNameValidation(event) {
  //   const {isInputValid, errorMessage} = validateInput(this.state.first_name);
  // }

  render() {
    return (
      <div
        className='wrapper'
        style={{backgroundImage: 'url("images/bg-registration-form-1.jpg")'}}>
        <div className='inner'>
          <div className='image-holder'>
            <img alt='' src='images/registration-form-1.jpg' />
          </div>
          <Form>
            <h3>Registration Form</h3>
            <div className='form-wrapper'>
              <Input
                type='text'
                placeholder='Username'
                className='form-control'
                onChange={evt => {
                  console.log('TCL: Register -> render -> value', evt.target.value);
                  this.setState({user_name: evt.target.value});
                }}
                value={this.state.user_name}
                validations={[this.validateContainsSpace]}
              />
              <i className='zmdi zmdi-account' />
            </div>
            <div className='form-wrapper'>
              <Input
                type='text'
                placeholder='Email Address'
                className='form-control'
                onChange={evt => {
                  this.setState({email: evt.target.value});
                }}
                value={this.state.email}
                validations={[this.validateEmail]}
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
              <Input
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
              <Input
                type='password'
                placeholder='Confirm Password'
                className='form-control'
                onChange={evt => {
                  this.setState({confirm_password: evt.target.value});
                }}
                value={this.state.confirm_password}
                validations={[this.validateConfirmPassword]}
              />
              <i className='zmdi zmdi-lock' />
            </div>
            <button type='button' onClick={this.onRegister}>
              Register
              <i className='zmdi zmdi-arrow-right' />
            </button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Register;
