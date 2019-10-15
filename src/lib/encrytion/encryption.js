import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
export const BEARER_AUTHENTICATION_SCHEMA = 'Bearer'
const SALT_ROUNDS = 10;
const SECRET_JWT_KEY = 'Re@dingF0rever';
const SERVER_ISSUE = 'Re@dingF0rever.com';

export const generateTokenAsync = async (id, memObj = {}) => {
  try {
    const encodedMemberObj = {
      id: id,
      username: memObj.username,
      avatar: memObj.avatar,
      email: memObj.email,
      gender: memObj.gender,
      dob: memObj.dob,
      role: memObj.role
    };
    const encryptedToken = await jwt.sign(encodedMemberObj, SECRET_JWT_KEY, {issuer: SERVER_ISSUE});
    return encryptedToken;
  } catch (error) {
    throw error;
  }
};

export const hashPasswordAsync = async password => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};
