import React, {Component} from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {createPost} from '../urls/post_apis';
import {isEmpty} from 'validator';
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //post body
      title: '',
      image: '',
      author: '',
      publish_date: new Date(),
      category_id: 0,
      content: '',

      listCategories: [],
      isUploading: false,
      progress: 0,
      avatarURL: '',
      picture: null
    };
    this.postComment = this.createPost.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.renderLocalImage = this.renderLocalImage.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const listCategories = JSON.parse(localStorage.getItem('categories'));
    this.setState({listCategories: listCategories});
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
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        // this.setState({avatarURL: url});
        this.createPostToServer(url);
      });
  };

  postIsFullFill() {
    if (isEmpty(this.state.title)) return false;
    if (isEmpty(this.state.author)) return false;
    if (this.state.picture) return false;
    if (isEmpty(this.state.content)) return false;
    if (this.state.category_id === 0) return false;
    return true;
  }

  createPostToServer(url) {
    const postBody = {
      title: this.state.title,
      image: url,
      author: this.state.author,
      publish_date: this.state.publish_date,
      category_id: this.state.category_id,
      content: this.state.content
    };
    createPost(postBody)
      .then(res => {
        console.log('TCL: CreatePost -> createPostToServer -> res', res);
        this.showToast();
      })
      .catch(err => {
        console.log('TCL: CreatePost -> createPostToServer -> err', err);
      });
  }

  showToast() {
    var x = document.getElementById('toast');
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 5000);
  }

  createPost() {
    //Upload image to firebase
    if (this.postIsFullFill()) {
      const {picture} = this.state;
      if (picture) {
        this.fileUploader.startUpload(picture);
      }
    } else {
      window.alert('You need to fill all the content to post');
    }
  }

  onChangeHandler = event => {
    const {
      target: {files}
    } = event;

    this.setState({picture: files[0]}, () => {
      console.log(this.state.picture);
    });
  };

  renderLocalImage() {
    return URL.createObjectURL(this.state.picture);
  }

  renderCategory() {
    return this.state.listCategories.map((cate, index) => {
      return (
        <option value={cate.name} key={index}>
          {cate.name}
        </option>
      );
    });
  }

  handleChange = date => {
    this.setState({
      publish_date: date
    });
  };
  render() {
    return (
      <div>
        <section>
          <div className='container'>
            {/* Block4 */}
            <div className='blo4 p-b-63'>
              {/* - */}
              <div className='text-blo4 p-t-33'>
                <h4 className='p-b-16'>
                  <input
                    className='tit9 bo-rad-10'
                    type='text'
                    placeholder='Title'
                    onChange={e => {
                      this.setState({title: e.target.value});
                    }}
                  />
                </h4>
                <h5 className='p-b-16'>
                  <input
                    className='tit10 bo-rad-10'
                    type='text'
                    placeholder='Author'
                    onChange={e => {
                      this.setState({author: e.target.value});
                    }}
                  />
                </h5>
                <h5 className='p-b-16'>
                  <div className='tit10'>
                    Publish Date:
                    <DatePicker
                      className='tit10'
                      selected={this.state.publish_date}
                      onChange={this.handleChange}
                    />
                  </div>
                </h5>

                {this.state.picture ? <img src={this.renderLocalImage()} /> : null}
                <FileUploader
                  accept='image/*'
                  name='avatar'
                  randomizeFilename
                  storageRef={firebase.storage().ref('images')}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                  onChange={this.onChangeHandler}
                  ref={instance => {
                    this.fileUploader = instance;
                  }}
                />
                <select
                  name
                  id
                  className='form-control'
                  onChange={evt => {
                    const selectedCategory = this.state.listCategories.find(
                      cate => cate.name === evt.target.value
                    );
                    console.log('TCL: render -> selectedCategory', selectedCategory);
                    this.setState({category_id: selectedCategory.id});
                  }}>
                  <option value disabled selected>
                    Category
                  </option>
                  {this.renderCategory()}
                </select>
                <textarea rows='20' cols='50' placeholder='Content' className='container-fluid' />
              </div>
            </div>
            <button
              type='button'
              onClick={this.createPost}
              className='btn3 flex-c-m size31 txt11 trans-0-4'>
              Post
            </button>
          </div>
        </section>
        <div id='toast'>
          <div id='img'>DONE!</div>
          <div id='desc'>...Your post is pending for admin to review....</div>
        </div>
      </div>
    );
  }
}
export default CreatePost;
