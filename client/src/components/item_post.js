import React from 'react';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import {Link} from 'react-router-dom';
const ItemPost = props => {
  const {post} = props;
  const day = moment(post.created_date).format('DD');
  const month = moment(post.created_date).format('MMM');
  const year = moment(post.created_date).year();
  const date = moment(post.created_date).format('MMM, DD YYYY');
  const postDetailPage = {pathname: '/detail', state: {post}};
  return (
    <div className='blob4 p-b-63'>
      <div className='pic-blo4 hov-img-zoom bo-rad-10 pos-relative'>
        <Link to={postDetailPage}>
          <img src={post.image} alt='IMG-BLOG' />
        </Link>
        <div className='date-blo4 flex-col-c-m'>
          <span className='txt30 m-b-4'>{day}</span>
          <span className='txt31'>
            {month}, {year}
          </span>
        </div>
      </div>
      <div className='text-blo4 p-t-33'>
        <h4 className='p-b-16'>
          <Link to={postDetailPage} className='tit9'>
            {post.title}
          </Link>
        </h4>
        <h4 className='p-b-16'>
          <Link to={postDetailPage}>{post.author}</Link>
        </h4>
        <div className='txt32 flex-w p-b-24'>
          <span>
            by {post.username}
            <span className='m-r-6 m-l-4'>|</span>
          </span>
          <span>
            {date}
            <span className='m-r-6 m-l-4'>|</span>
          </span>
          <span>
            {post.category_name}
            <span className='m-r-6 m-l-4'>|</span>
          </span>
          <span>{post.views_count} Views</span>
        </div>
        <TextTruncate
          line={3}
          element="span"
          truncateText="…"
          text= {post.content}
          textTruncateChild={
            <Link to={postDetailPage} className='dis-block txt4 m-t-30'>
              Continue Reading
              <i className='fa fa-long-arrow-right m-l-10' aria-hidden='true' />
            </Link>
          }
        />
        {/* <p style={{textAlign:'justify'}}>{post.content}</p>
        <Link to={postDetailPage} className='dis-block txt4 m-t-30'>
          Continue Reading
          <i className='fa fa-long-arrow-right m-l-10' aria-hidden='true' />
        </Link> */}
      </div>
    </div>
  );
};
export default ItemPost;
