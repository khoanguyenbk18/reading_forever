import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Category = props => {
  const {category} = props;
  const toCategoriesList = {pathname: '/register', state: {category}};
  return (
    <li className='bo5-b p-t-8 p-b-8'>
      <Link to={toCategoriesList} className='txt27'>
        {category.name}
      </Link>
    </li>
  );
};

export default Category;