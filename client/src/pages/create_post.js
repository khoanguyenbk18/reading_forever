import React, {Component} from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategories: [],
      isUploading: false,
      progress: 0,
      avatarURL: '',
      picture: null,
      startDate: new Date()
    };
    this.postComment = this.postComment.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onDrop = this.onDrop.bind(this);
    this.renderLocalImage = this.renderLocalImage.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const listCategories = JSON.parse(localStorage.getItem('categories'));
    this.setState({listCategories: listCategories});

    // const post = this.props.location.state.post;
  }

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = progress => this.setState({progress});
  handleUploadError = error => {
    this.setState({isUploading: false});
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({avatarURL: url}));
  };

  postComment() {
    const {picture} = this.state;
    this.fileUploader.startUpload(picture);
  }

  onChangeHandler = event => {
    const {
      target: {files}
    } = event;
    console.log('TCL: CreatePost -> files', files);

    // files.map(file => filesToStore.push(file));

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
      startDate: date
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
                      // this.setState({})
                      console.log('TCL: render -> e', e.target.value);
                    }}
                  />
                </h4>
                <h5 className='p-b-16'>
                  <input
                    className='tit10 bo-rad-10'
                    type='text'
                    placeholder='Author'
                    onChange={e => {
                      // this.setState({})
                      console.log('TCL: render -> e', e.target.value);
                    }}
                  />
                </h5>
                <h5 className='p-b-16'>
                  <div className='tit10'>
                    Publish Date:
                    <DatePicker
                      className='tit10'
                      selected={this.state.startDate}
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
                    this.setState({gender: evt.target.value});
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
              onClick={this.postComment}
              className='btn3 flex-c-m size31 txt11 trans-0-4'>
              Post
            </button>
          </div>
        </section>
      </div>
    );
  }
}
export default CreatePost;
