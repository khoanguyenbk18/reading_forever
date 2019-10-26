import {isEmail, isEmpty} from 'validator';
import {isCustomEmpty} from './custom_validator';
import {ErrorCode} from '../lib/enums/error_code_enum';

export const validateRegisterRequest = registerBody => {
  let errors = [];

  let {username, password, avatar, email, gender, dob} = registerBody;

  if (isEmpty(username)) {
    errors.push({error_code: ErrorCode.NAME_IS_REQUIRED});
  }

  if (isEmpty(password)) {
    errors.push({error_code: ErrorCode.PASSWORD_IS_REQUIRED});
  }

  if (!isEmail(email)) {
    errors.push({error_code: ErrorCode.EMAIL_IS_INVALID});
  }

  return {
    errors,
    isValid: errors.length === 0
  };
};
