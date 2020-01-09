import React, {Component} from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import {getListReports, rejectReport, deletePost} from '../urls/admin_apis';
import {getPostDetail} from '../urls/post_apis';

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

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      listReport: [],
      post: null,
      currentPage: 1,
      pageLength: 5
    };
    this.renderPendingPosts = this.renderReports.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.getListReportFromServer = this.getListReportFromServer.bind(this);
    this.updateListReport = this.updateListReport.bind(this);
    this.showToast = this.showToast.bind(this);
  }
  getListReportFromServer() {
    getListReports()
      .then(res => {
        console.log('TCL: Dashboard -> componentDidMount -> res', res);
        this.setState({listReport: res.data.data});
      })
      .catch(err => {
        console.log('TCL: Report -> getListPendingPostFromServer -> err', err);
      });
  }

  componentDidMount() {
    this.getListReportFromServer();
  }

  showToast() {
    var x = document.getElementById('toast');
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 5000);
  }

  onClickRemovePermantely(post) {
    const re = window.confirm('are you sure you want to delete permantely this post');
    if (re === true) {
      console.log('remove post ->', post);
      deletePost(post.id)
      .then(res => {
        this.updateListReport(post);
      })
      .catch(err => {
        console.log('TCL: Dashboard -> onClickAccept -> err', err);
      });
    } else {
      console.log('do nothing');
    }
  }

  onClickReject(post) {
    rejectReport(post.id)
      .then(res => {
        this.updateListReport(post);
      })
      .catch(err => {
        console.log('TCL: Dashboard -> onClickAccept -> err', err);
      });
  }

  updateListReport(post) {
    if (this.state.listReport.length === 0) {
      this.showToast();
    } else {
      this.getListReportFromServer();
    }
  }

  onPrevPage = (e) =>{
    console.log("prev -> ", this.state.currentPage)
    if(this.state.currentPage === 1) return;
    else{
      this.setState({
        currentPage: this.state.currentPage - 1
      });
      this.renderReports(this.getData(this.state.currentPage))
    }
  }
  onNextPage = (e) => {
    console.log("next -> ", this.state.listReport.length/this.state.pageLength)
    if(this.state.currentPage > Math.ceil(this.state.listReport.length/this.state.pageLength) - 1) return;
    else{
      this.setState({
        currentPage: this.state.currentPage + 1
      });
      this.renderReports(this.getData(this.state.currentPage));
    }
  }
  getData(pageNo){
    console.log("data -> ", this.state.currentPage)
    var startOfRecord = (pageNo - 1) * this.state.pageLength;
    var endOfRecord = startOfRecord + this.state.pageLength;
    var listReport = this.state.listReport.slice(startOfRecord,endOfRecord);
    return listReport
  }
  renderReports(listReport) {
    return listReport.map((item, index) => {
      return (
        <tr style = {{height:"100px"}}
          key={index}
          onClick={e => {
            e.preventDefault();
            console.log('TCL: Dashboard -> renderPendingPosts -> e.currentTarget', e.currentTarget);
            this.openModal(item);
          }}>
          <td className='column1' style = {{textAlign:"center"}}>{item.id}</td>
          <td className='column2' style = {{textAlign:"center"}}>{item.post_id}</td>
          <td className='column3' style = {{textAlign:"center"}}>{item.content}</td>
          <td className='column4' style = {{textAlign:"center"}}>{item.reporter_id}</td>
          <td className='column5' style = {{textAlign:"center"}}>
            <button
              type='button'
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                if (e.target === e.currentTarget) {
                  // handle
                  console.log(e.currentTarget);
                  this.onClickRemovePermantely(item);
                }
              }}>
              DELETE
            </button>
          </td>
          <td className='column6' style = {{textAlign:"center"}}>
            <button
              type='button'
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                if (e.target === e.currentTarget) {
                  // handle
                  console.log(e.currentTarget);
                  this.onClickReject(item);
                }
              }}>
              REJECT
            </button>
          </td>
        </tr>
      );
    });
  }

  openModal(item) {
    getPostDetail(item.post_id)
      .then(res => {
        console.log('TCL: Report -> openModal -> res', res);
        this.setState({modalIsOpen: true, post: res.data});
      })
      .catch(err => {
        console.log('TCL: Report -> openModal -> err', err);
      });
  }

  afterOpenModal() {}

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
              alt=''
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
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-registration-form-1.jpg)'}}>
          <h2 className='tit6 t-center'>READING FOREVER</h2>
        </section>
        {this.state.post !== null ? this.renderModal() : null}
        <div className='container-table100'>
          {/* <div className='search-sidebar2 size12 bo2 pos-relative'>
            <input
              className='input-search-sidebar2 txt10 p-l-20 p-r-55'
              type='text'
              name='search'
              placeholder='Search'
              ref={this.inputSearch}
            />
            <button
              className='btn-search-sidebar2 flex-c-m ti-search trans-0-4'
              type='button'
              onClick={this.onSearchPost}
            />
          </div> */}

          <table>
            <thead>
              <tr className='table100-head'>
                <th className='column1' style = {{textAlign:"center"}}>Report ID</th>
                <th className='column2' style = {{textAlign:"center"}}>Post ID</th>
                <th className='column3' style = {{textAlign:"center"}}>Report Content</th>
                <th className='column4' style = {{textAlign:"center"}}>Reporter ID</th>
                <th className='column5' style = {{textAlign:"center"}}>Delete Post</th>
                <th className='column6' style = {{textAlign:"center"}}>Remove Report</th>
              </tr>
            </thead>
            <tbody>{this.renderReports(this.getData(this.state.currentPage))}</tbody>
          </table>
          <button key="prev"
            className="pagination-btn prev"
            onClick={this.onPrevPage}
            style ={{marginLeft:"100px"}}>
            {"<"}
          </button>
          <text style={{marginLeft:"0px", background:"white"}}>
            {this.state.currentPage}/{Math.ceil(this.state.listReport.length/this.state.pageLength)}
          </text>
          <button key="next"
            className="pagination-btn next"
            onClick={this.onNextPage}
            style ={{}}>
            {">"}
          </button>
          
        </div>
        <div id='toast'>
          <div id='img'>...</div>
          <div id='desc'>...No more report....</div>
        </div>
      </div>
    );
  }
}
export default Report;
