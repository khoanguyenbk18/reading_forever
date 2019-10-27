import React, {Component} from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.renderPendingPosts = this.renderPendingPosts.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onClickReject = this.onClickReject.bind(this);
  }

  onClickAccept(){
    console.log("ACCEPT");
  }

  onClickReject(){
    console.log("REJECT");
  }

  renderPendingPosts() {
    return (
      <tr>
        <td className='column1'>2017-09-29 01:22</td>
        <td className='column2'>200398</td>
        <td className='column3'>
          iPhone X 64Gb Grey iPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb
          GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb
          GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb
          GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb GreyiPhone X 64Gb
          GreyiPhone X 64Gb GreyiPhone X 64Gb Grey
        </td>
        <td className='column4'>$999.00</td>
        <td className='column5'>Alexander Roger </td>
        <td className='column6' onClick={this.onClickAccept}>
          <button>Accept</button>
        </td>
        <td className='column7' onClick={this.onClickReject}>
          <button>Reject</button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className='limiter'>
        <div className='container-table100'>
          <div>
            <div className='table100'>
              <table>
                <thead>
                  <tr className='table100-head'>
                    <th className='column1'>Date created</th>
                    <th className='column2'>Post Title</th>
                    <th className='column3'>Content</th>
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
      </div>
    );
  }
}
export default Dashboard;
