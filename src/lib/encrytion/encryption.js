import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET_JWT_KEY, SALT_ROUNDS, SERVER_ISSUE} from '../constants/system_config';
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
export const isMatchPassword = async (password, hashed_password) => {
  try {
    const isMatch = await bcrypt.compare(password, hashed_password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};
