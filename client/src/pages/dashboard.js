import React, {Component} from 'react';
// import ModalFullScreen from '../components/modal_fullscreen'
import Modal from 'react-modal';
import moment from 'moment';
import {getListPostPending, acceptPost, rejectPost} from '../urls/post_apis';

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      listPostPending: [],
      post: null
    };
    this.renderPendingPosts = this.renderPendingPosts.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onClickReject = this.onClickReject.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.getListPendingPostFromServer = this.getListPendingPostFromServer.bind(this);
    this.updateListPendingPost = this.updateListPendingPost.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  getListPendingPostFromServer() {
    getListPostPending()
      .then(res => {
        console.log('TCL: Dashboard -> componentDidMount -> res', res);
        this.setState({listPostPending: res.data.data});
      })
      .catch(err => {});
  }

  componentDidMount() {
    this.getListPendingPostFromServer();
  }

  showToast() {
    var x = document.getElementById('toast');
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 5000);
  }

  onClickAccept(post) {
    acceptPost(post.id)
      .then(res => {
        this.updateListPendingPost(post);
        console.log('TCL: Dashboard -> onClickAccept -> res', res);
      })
      .catch(err => {
        console.log('TCL: Dashboard -> onClickAccept -> err', err);
      });
  }

  updateListPendingPost(post) {
    if (this.state.listPostPending.length === 1) {
      //list empty --> get new 10 post
      this.showToast()
      this.getListPendingPostFromServer();
    } else {
      //remove current post
      this.setState({
        listPostPending: this.state.listPostPending.filter(item => item.id !== post.id)
      });
    }
  }

  onClickReject(post) {
    rejectPost(post.id)
      .then(res => {
        this.updateListPendingPost(post);
      })
      .catch(err => {
        console.log('TCL: Dashboard -> onClickAccept -> err', err);
      });
  }

  renderPendingPosts() {
    return this.state.listPostPending.map((item, index) => {
      return (
        <tr
          key={index}
          onClick={e => {
            e.preventDefault();
            console.log('TCL: Dashboard -> renderPendingPosts -> e.currentTarget', e.currentTarget);
            this.openModal(item);
          }}>
          <td className='column1'>{moment(item.created_date).format('DD-MM-YYYY')}</td>
          <td className='column2'>{item.category_name}</td>
          <td className='column3'>{item.title}</td>
          <td className='column4'>{item.author}</td>
          <td className='column5'>{item.post_creator} </td>
          <td className='column6'>
            <button
              type='button'
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                if (e.target === e.currentTarget) {
                  // handle
                  console.log(e.currentTarget);
                  this.onClickAccept(item);
                }
              }}>
              Accept
            </button>
          </td>
          <td className='column7'>
            <button
              type='button'
              onClick={() => {
                this.onClickReject(item);
              }}>
              Reject
            </button>
          </td>
        </tr>
      );
    });
  }

  openModal(item) {
    this.setState({modalIsOpen: true, post: item});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  ///////
  renderDateInMonth() {
    const day = moment(this.state.post.created_date).daysInMonth();
    return day;
  }

  renderMonthAndYear() {
    if (!this.state.post) return;
    const month = moment(this.state.post.created_date).format('MMM');
    const year = moment(this.state.post.created_date).year();
    return month + ', ' + year;
  }

  renderDate() {
    const date = moment(this.state.post.created_date).format('MMM, DD YYYY');
    return date;
  }

  postComment() {
    console.log('Post Comment here');
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}>
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
            <img
              className='pic-blo4 hov-img-zoom bo-rad-10 pos-relative'
              src={this.state.post.image}></img>
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
      </Modal>
    );
  }

  render() {
    return (
      <div>
        {this.state.post !== null ? this.renderModal() : null}
        <div className='container-table100'>
          <div>
            <div className='table100'>
              <table>
                <thead>
                  <tr className='table100-head'>
                    <th className='column1'>Date created</th>
                    <th className='column2'>Category</th>
                    <th className='column3'>Title</th>
                    <th className='column4'>Author</th>
                    <th className='column5'>Post Creator</th>
                    <th className='column6'>Reject</th>
                    <th className='column7'>Accept</th>
                  </tr>
                </thead>
                <tbody>{this.renderPendingPosts()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div id='toast'>
          <div id='img'>...</div>
          <div id='desc'>...Get new 10 pending post....</div>
        </div>
      </div>
    );
  }
}
export default Dashboard;