import React, {Component} from 'react';
import moment from 'moment';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import {getPostDetail, createComment} from '../urls/post_apis';
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: '',
      comment: ''
    };
    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const post = this.props.location.state.post;
    console.log('TCL: PostDetail -> componentDidMount -> post', post);
    getPostDetail(post.id)
      .then(res => {
        this.setState({post: res.data}, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log('TCL: PostDetail -> err', err);
      });
  }

  handleChangeUsername = event => this.setState({username: event.target.value});
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
    console.log(this.state.comment);
    console.log(this.state.post.id);
    const commentator = JSON.parse(localStorage.getItem('user'));
    console.log('TCL: postComment -> commentator', commentator);
    const commentBody = {
      postId: this.state.post.id,
      comment: this.state.comment
    };
    createComment(commentBody)
      .then(res => {
        console.log('TCL: postComment -> res', res);
      })
      .catch(err => {
        console.log('TCL: postComment -> err', err);
      });
  }

  renderListComments() {
    return this.state.post.detail_comments.map((item, index) => {
      return (
        <div className='item' key={index}>
          <div className='testi_item'>
            <p>{item.comment}</p>
            <h4>Admin</h4>
          </div>
        </div>
      );
    });
  }

  render() {
    return this.state.post ? (
      <div>
        {/* Title Page */}
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: `url(${this.state.post.image})`}}>
          <h2 className='tit6'>{this.state.post.author}</h2>
        </section>
        {/* Content page */}
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
            {localStorage.getItem('user') ? (
              <form className='leave-comment p-t-10'>
                <h4 className='txt33 p-b-14'>Leave a Comment</h4>
                <textarea
                  className='bo-rad-10 size29 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-40'
                  name='commentent'
                  placeholder='Comment...'
                  defaultValue={''}
                  onChange={evt => {
                    this.setState({comment: evt.target.value});
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
            ) : null}
          </div>
          <div className='container'>
            <div className='testi_inner'>
              <h4 className='txt33 p-b-14'>Comments</h4>
              <div className='testi_slider owl-carousel'>{this.renderListComments()}</div>
            </div>
          </div>
        </section>
      </div>
    ) : null;
  }
}
export default PostDetail;
