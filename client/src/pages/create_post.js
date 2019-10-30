import React, {Component} from 'react';
import moment from 'moment';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import ImageUploader from 'react-images-upload';
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: 848,
        title: 'Northwest Passage',
        image: 'https://picsum.photos/id/848/400/600',
        author: 'Ali Varney',
        publish_date: '2019-02-07',
        category: 11,
        content:
          'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        comment_ids: 439,
        views_count: 8011,
        status: 1,
        post_creator_id: 572,
        created_date: '2019-02-05',
        document_vectors:
          "'accumsan':40 'ali':3 'aliquam':28 'amet':37 'ant':25 'condimentum':21 'diam':16 'dictumst':9 'eget':31 'elit':32 'erat':17 'ero':38 'fermentum':18 'habitass':7 'hac':6 'iaculi':15 'id':13 'justo':19,27 'mauri':35 'morbi':10 'nec':20 'nequ':22 'northwest':1 'nulla':26 'passag':2 'placerat':24 'platea':8 'pretium':14 'qui':29,42 'sapien':23 'scelerisqu':34 'sit':36 'sodal':33 'suspendiss':39 'tortor':41 'turpi':30,43 'varney':4 'velit':12 'vestibulum':11"
      },
      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: '',
      picture: null
    };
    this.postComment = this.postComment.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onDrop = this.onDrop.bind(this);
    this.renderLocalImage = this.renderLocalImage.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

  renderDateInMonth() {
    const day = moment(this.state.post.created_date).daysInMonth();
    return day;
  }

  renderMonthAndYear() {
    const month = moment(this.state.post.created_date).format('MMM');
    const year = moment(this.state.post.created_date).year();
    return month + ', ' + year;
  }

  renderDate() {
    const date = moment(this.state.post.created_date).format('MMM, DD YYYY');
    return date;
  }

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

  // onDrop(picture) {
  //   console.log('TCL: onDrop -> picture', picture);
  //   this.setState({
  //     picture: picture
  //   });
  // }

  renderLocalImage() {
    return URL.createObjectURL(this.state.picture);
  }

  render() {
    return this.state.post ? (
      <div>
        {/* Title Page */}
        <section className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'>
          <img src={`${this.state.picture ? this.renderLocalImage() : null}`} />
          <h2 className='tit6'>{this.state.post.author}</h2>
        </section>
        {/* Content page */}
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
        {/* <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        /> */}
        <section>
          <div className='container'>
            {/* Block4 */}
            <div className='blo4 p-b-63'>
              {/* - */}
              <div className='pic-blo4 hov-img-zoom bo-rad-10 pos-relative'>
                <div className='date-blo4 flex-col-c-m'>
                  <span className='txt30 m-b-4'>{this.renderDateInMonth()}</span>
                  <span className='txt31'>{this.renderMonthAndYear()}</span>
                </div>
              </div>
              {/* - */}
              <div className='text-blo4 p-t-33'>
                <h4 className='p-b-16'>
                  <span className='tit9'>
                    {this.state.post.title} by {this.state.post.author}
                  </span>
                </h4>
                <div className='txt32 flex-w p-b-24'>
                  <span>
                    by {this.state.post.username}
                    <span className='m-r-6 m-l-4'>|</span>
                  </span>
                  <span>
                    {this.renderDate()}
                    <span className='m-r-6 m-l-4'>|</span>
                  </span>
                  <span>
                    {this.state.post.category_name}
                    <span className='m-r-6 m-l-4'>|</span>
                  </span>
                  <span>{this.state.post.views_count} Views</span>
                </div>
                <p>{this.state.post.content}</p>
              </div>
            </div>
            {/* Leave a comment */}
            <form className='leave-comment p-t-10'>
              <h4 className='txt33 p-b-14'>Leave a Comment</h4>
              <textarea
                className='bo-rad-10 size29 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-40'
                name='commentent'
                placeholder='Comment...'
                defaultValue={''}
                onChange={evt => {
                  console.log(evt.target.value);
                }}
                // value={}
              />
              {/* Button3 */}
              <button
                type='button'
                onClick={this.postComment}
                className='btn3 flex-c-m size31 txt11 trans-0-4'>
                Post Comment
              </button>
            </form>
          </div>
        </section>
      </div>
    ) : null;
  }
}
export default CreatePost;
