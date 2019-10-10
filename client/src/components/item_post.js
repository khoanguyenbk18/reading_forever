import React from 'react';
import moment from 'moment';
const ItemPost = props => {
  const {post} = props;
  const day = moment(post.created_date).daysInMonth();
  const month = moment(post.created_date).format('MMM');
  const year = moment(post.created_date).year();
  const date = moment(post.created_date).format('MMM, DD YYYY');

  return (
    <div className='blob4 p-b-63'>
      <div className='pic-blo4 hov-img-zoom bo-rad-10 pos-relative'>
        <a href='blog-detail.html'>
          <img src={post.image} alt='IMG-BLOG' />
        </a>
        <div className='date-blo4 flex-col-c-m'>
          <span className='txt30 m-b-4'>{day}</span>
          <span className='txt31'>
            {month}, {year}
          </span>
        </div>
      </div>
      <div className='text-blo4 p-t-33'>
        <h4 className='p-b-16'>
          <a href='blog-detail.html' className='tit9'>
            {post.title}
          </a>
        </h4>
        <h4 className='p-b-16'>
          <a href='blog-detail.html' className='tit9'>
            {post.author}
          </a>
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
        <p>{post.content}</p>
        <a href='blog-detail.html' className='dis-block txt4 m-t-30'>
          Continue Reading
          <i className='fa fa-long-arrow-right m-l-10' aria-hidden='true' />
        </a>
      </div>
    </div>
  );
};
export default ItemPost;
