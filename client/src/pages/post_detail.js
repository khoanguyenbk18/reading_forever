import React, {Component} from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import {getPostDetail, createComment, reportPost} from '../urls/post_apis';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      post: null,
      comment: '',
      report: ''
    };
    this.postComment = this.postComment.bind(this);
    this.reportPost = this.reportPost.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.showToast = this.showToast.bind(this);
    this.report = this.report.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const post = this.props.location.state.post;
    getPostDetail(post.id)
      .then(res => {
        console.log('TCL: PostDetail -> componentDidMount -> res', res);
        this.setState({post: res.data}, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log('TCL: PostDetail -> err', err);
      });
  }

  showToast() {
    var x = document.getElementById('toast');
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 5000);
  }

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

  reportPost() {
    this.openModal();
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

  isExistedComment() {
    return this.state.post.detail_comments[0] !== null;
  }

  renderListComments() {
    if (this.isExistedComment()) {
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
  }

  openModal(item) {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  report() {
    const {id: reporterId} = JSON.parse(localStorage.getItem('user'));
    const reportBody = {
      postId: this.state.post.id,
      reporter_id: reporterId,
      content: this.state.report
    };
    reportPost(reportBody)
      .then(res => {
        console.log('TCL: report -> res', res);
        console.log(this.state.report);
        console.log(this.state.post.id);
        this.showToast();
        this.setState({modalIsOpen: false});
      })
      .catch(err => {
        console.log('TCL: report -> err', err);
      });
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}>
        <div className='blo4 p-b-63'>
          <div className='text-blo4 p-t-33'>
            <h4 className='p-b-16'>
              <span className='tit9'>REPORT POST: {this.state.post.title}</span>
            </h4>
          </div>
          {/* - */}
          <textarea
            rows='20'
            cols='50'
            placeholder='What is wrong with this post?'
            className='container-fluid'
            onChange={evt => {
              this.setState({report: evt.target.value});
            }}
            value={this.state.report}
          />
          <label
            style={{
              backgroundColor: 'steelblue',
              color: 'white',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 4,
              cursor: 'pointer'
            }}
            onClick={this.report}>
            SEND
          </label>
        </div>
      </Modal>
    );
  }

  render() {
    return this.state.post ? (
      <div>
        {this.renderModal()}
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
                {/* Button Post Comment */}
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
              {this.isExistedComment() ? (
                <div className='testi_slider owl-carousel'>{this.renderListComments()}</div>
              ) : (
                <div className='txt35 p-b-14'>There is no comnment</div>
              )}
            </div>
          </div>
          <div className='container'>
            <button
              type='button'
              onClick={this.reportPost}
              className='btn3 flex-c-m size31 txt11 trans-0-4'>
              Report
            </button>
          </div>
        </section>
        <div id='toast'>
          <div id='img'>DONE!</div>
          <div id='desc'>...Your report is sent to admin....</div>
        </div>
      </div>
    ) : null;
  }
}
export default PostDetail;
