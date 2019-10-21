import dbConnection, {USERS_TABLE} from '../database';
import HttpStatusCode from 'http-status-codes';
import {RoleEnum} from '../lib/enums/role_enum';
import {validateRegisterRequest} from '../validators/member_validators';
import {
  generateTokenAsync,
  hashPasswordAsync,
  isMatchPassword,
  BEARER_AUTHENTICATION_SCHEMA
} from '../lib/encrytion/encryption';

export const register = async (request, response, next) => {
  try {
    const db = await dbConnection.get();
    let userRequestBody = request.body;

    //VALIDATE BODY
    const {errors, isValid} = validateRegisterRequest(userRequestBody);
    if (!isValid) {
      return response.status(HttpStatusCode.BAD_REQUEST).send(errors);
    }
    //ASSIGN ROLE
    userRequestBody.role = RoleEnum.MEMBER;
    //HASH PASSWORD
    const hashPassword = await hashPasswordAsync(userRequestBody.password);
    userRequestBody.hashed_password = hashPassword;

    console.log(userRequestBody);

    const idNewMember = await db.query(
      `INSERT INTO ${USERS_TABLE}
      (username, hashed_password, avatar, email, gender, dob, role)
    VALUES ('${userRequestBody.username}',
    '${userRequestBody.hashed_password}',
    '${userRequestBody.avatar}',
    '${userRequestBody.email}',
    '${userRequestBody.gender}',
    '${userRequestBody.dob}',
    ${userRequestBody.role}) RETURNING ${USERS_TABLE}.id;`
    );

    let registedMember = {
      id: idNewMember.rows.id,
      ...userRequestBody
    };

    const encryptedToken = await generateTokenAsync(registedMember.id, registedMember);
    registedMember.api_token = BEARER_AUTHENTICATION_SCHEMA + ' ' + encryptedToken;
    return response.status(HttpStatusCode.OK).send(registedMember);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (request, response, next) => {
  try {
    const db = await dbConnection.get();
    const loginRequestBody = request.body;
    const username = loginRequestBody.username;
    console.log("TCL: login -> username", username)

    const loginResult = await db.query(`
    SELECT * FROM ${USERS_TABLE}
    WHERE username = '${username}'
    `);

    if (loginResult.rows.length == 0) {
      return response.status(HttpStatusCode.OK).send('There is not exist account');
    } else {
      //check password is corrent
      const isMatch = await isMatchPassword(
        loginRequestBody.password,
        loginResult.rows[0].hashed_password
      );
      if (isMatch) {
        const loginMember = loginResult.rows[0]
        const encryptedToken = await generateTokenAsync(loginMember.id, loginMember);
        loginMember.api_token = BEARER_AUTHENTICATION_SCHEMA + ' ' + encryptedToken;
        return response.status(HttpStatusCode.OK).send(loginResult.rows);
      } else {
        return response.status(HttpStatusCode.OK).send('password is incorrect');
      }
    }
  } catch (error) {
    console.log(error);
  }
};
