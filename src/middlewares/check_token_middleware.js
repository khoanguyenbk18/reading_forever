import jwt, {TokenExpiredError} from 'jsonwebtoken';
import HttpStatusCode from 'http-status-codes';
import {
  AUTHORIZATION_HEADER,
  BEARER_ATHENTICATION_SCHEMA,
  SECRET_JWT_KEY
} from '../lib/constants/system_config';

export const checkTokenMiddleware = async (request, response, next) => {
  try {
    let token = request.headers[AUTHORIZATION_HEADER];
    if (!token) {
      return Error('MissingToken', HttpStatusCode.UNAUTHORIZED);
    }

    if (token.startsWith(BEARER_ATHENTICATION_SCHEMA)) {
      token = token.slide(7, token.length);
    }

    if (token) {
      jwt.verify(token, SECRET_JWT_KEY, (error, decodedToken) => {
        if (error) {
          return Error('TokenIsNotValied', HttpStatusCode.UNAUTHORIZED);
        }
      });
    }

    request.decodedToken = {
      id: decodedToken.id,
      username: decodedToken.username,
      avatar: decodedToken.avatar,
      email: decodedToken.email,
      role: decodedToken.role,
      dob: decodedToken.dob
    };
    next();
  } catch (error) {}
};

class Error {
  constructor(name = '', statusCode = 500, errorCode = 9999, errorMessage = '') {
    super();
    this.type = name;
    this.status_code = statusCode;
    this.error_code = errorCode;
    this.error_message = errorMessage;
  }
}
