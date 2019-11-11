import React from 'react';

const FormError = props => {
  if (props.isHidden) {
    return null;
  }
  return <span>{props.errorMessage}</span>;
};
export default FormError;
