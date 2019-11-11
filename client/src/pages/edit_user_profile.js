import React, {Component} from 'react';
import {Path} from '../libs/path';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase/app';
import {updateProfile} from '../urls/user_apis';
import {isEmail, isEmpty} from 'validator';
class EditUserProfile extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      username: user.username,
      email: user.email,
      gender: user.gender,
      avatar: user.avatar,

      isUploading: false,
      progress: 0,
      avatarURL: '',
      picture: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = progress => this.setState({progress});
  handleUploadError = error => {
    this.setState({isUploading: false});
    console.error(error);
  };

  handleUploadSuccess = filename => {
    console.log('TCL: CreatePost -> filename', filename);
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase
      .storage()
      .ref('avatar')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log('TCL: EditUserProfile -> url', url);
        this.updateProfileToServer(url);
      })
      .catch(err => {
        console.log('TCL: EditUserProfile -> err', err);
      });
  };

  updateProfileToServer = url => {
    const updateProfileBody = {
      username: this.state.username,
      email: this.state.email,
      avatar: url ? url : this.state.avatar,
      gender: this.state.gender
    };
    updateProfile(updateProfileBody)
      .then(res => {
        let userLocal = JSON.parse(localStorage.getItem('user'));
        userLocal.username = updateProfileBody.username;
        userLocal.email = updateProfileBody.email;
        userLocal.avatar = updateProfileBody.avatar;
        userLocal.gender = updateProfileBody.gender;
        localStorage.setItem('user', JSON.stringify(userLocal));
        this.props.history.push(Path.UserProfle);
      })
      .catch(err => {
        console.log('TCL: EditUserProfile -> err', err);
      });
  };

  isFullfill = () => {
    console.log(this.state);
    if (isEmpty(this.state.username)) return false;
    if (isEmpty(this.state.email)) return false;
    if (!isEmail(this.state.email)) return false;
    return true;
  };
  updateProfile = () => {
    if (this.isFullfill()) {
      const {picture} = this.state;
      if (picture) {
        console.log('TCL: EditUserProfile -> updateProfile -> picture', picture);
        this.fileUploader.startUpload(picture);
      } else {
        this.updateProfileToServer(null);
      }
    } else {
      window.alert('You need to full fill');
    }
  };

  onChangeHandler = event => {
    const {
      target: {files}
    } = event;

    this.setState({picture: files[0]}, () => {
      console.log(this.state.picture);
    });
  };

  renderLocalImage() {
    if (this.state.picture) {
      return URL.createObjectURL(this.state.picture);
    } else {
      return this.state.avatar;
    }
  }

  render() {
    return (
      <div>
        {/*================Home Banner Area =================*/}
        <section className='home_banner_area'>
          <div className='container box_1620'>
            <div className='banner_inner d-flex align-items-center'>
              <div className='banner_content'>
                <div className='media'>
                  <div className='d-flex'>
                    <img alt='' src={this.renderLocalImage()} />
                  </div>
                  <div className='media-body'>
                    <div className='personal_text'>
                      <label
                        style={{
                          backgroundColor: 'steelblue',
                          color: 'white',
                          padding: 10,
                          borderRadius: 4,
                          cursor: 'pointer'
                        }}>
                        Change Avatar
                        <FileUploader
                          hidden
                          accept='image/*'
                          storageRef={firebase.storage().ref('avatar')}
                          onUploadStart={this.handleUploadStart}
                          onUploadError={this.handleUploadError}
                          onUploadSuccess={this.handleUploadSuccess}
                          onProgress={this.handleProgress}
                          onChange={this.onChangeHandler}
                          ref={instance => {
                            this.fileUploader = instance;
                          }}
                        />
                      </label>
                      <h6>Username</h6>
                      <input
                        className='tit9 bo-rad-10'
                        type='text'
                        value={this.state.username}
                        onChange={e => {
                          this.setState({username: e.target.value});
                        }}
                      />
                      <ul className='list basic_info'>
                        <li>
                          <i className='lnr lnr-calendar-full' />
                          Email:
                          <input
                            className='tit9 bo-rad-10'
                            type='text'
                            value={this.state.email}
                            onChange={e => {
                              this.setState({email: e.target.value});
                            }}
                          />
                        </li>
                        <li>
                          <i className='lnr lnr-phone-handset' />
                          Gender:
                          <select
                            value={this.state.gender}
                            className='form-control'
                            onChange={evt => {
                              this.setState({gender: evt.target.value});
                            }}>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                          </select>
                        </li>
                      </ul>
                      <label
                        style={{
                          backgroundColor: 'steelblue',
                          color: 'white',
                          padding: 10,
                          borderRadius: 4,
                          cursor: 'pointer'
                        }}
                        onClick={this.updateProfile}>
                        UPDATE
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Testimonials Area =================*/}
      </div>
    );
  }
}

export default EditUserProfile;
