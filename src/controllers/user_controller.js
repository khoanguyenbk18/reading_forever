import dbConnection, {USERS_TABLE, POSTS_TABLE, NOTIFICATION_TABLE} from '../database';
import HttpStatusCode from 'http-status-codes';
import {RoleEnum} from '../lib/enums/role_enum';
import {validateRegisterRequest} from '../validators/member_validators';
import {generateTokenAsync, hashPasswordAsync, isMatchPassword} from '../lib/encrytion/encryption';
import {BEARER_AUTHENTICATION_SCHEMA} from '../lib/constants/system_config';
export const register = async (request, response, next) => {
  try {
    const db = await dbConnection.get();
    let userRequestBody = request.body;
    userRequestBody.username = userRequestBody.username.toLowerCase();
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

    //FIND EXIST USERNAME
    const findUserNameExist = await db.query(
      `SELECT EXISTS
      (SELECT 1 FROM ${USERS_TABLE} WHERE username=$1)`,
      [userRequestBody.username]
    );
    console.log('TCL: register -> findUserNameExist', findUserNameExist);

    if (findUserNameExist.rows[0].exists) {
      return response.status(HttpStatusCode.BAD_REQUEST).send('This username already exist');
    }
    console.log(userRequestBody);

    const idNewMember = await db.query(
      `INSERT INTO ${USERS_TABLE}
      (username, hashed_password, avatar, email, gender, role)
    VALUES ('${userRequestBody.username}',
    '${userRequestBody.hashed_password}',
    '${userRequestBody.avatar}',
    '${userRequestBody.email}',
    '${userRequestBody.gender}',
    ${userRequestBody.role}) RETURNING ${USERS_TABLE}.id;`
    );

    let registedMember = {
      id: idNewMember.rows.id,
      ...userRequestBody
    };

    if (registedMember.hasOwnProperty('hashed_password')) {
      delete registedMember.hashed_password;
    }

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
    console.log('TCL: login -> username', username);

    const loginResult = await db.query(`
    SELECT * FROM ${USERS_TABLE}
    WHERE username = '${username}'
    `);

    if (loginResult.rows.length == 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).send('There is not exist account');
    } else {
      //check password is corrent
      const isMatch = await isMatchPassword(
        loginRequestBody.password,
        loginResult.rows[0].hashed_password
      );
      if (isMatch) {
        const loginMember = loginResult.rows[0];
        const encryptedToken = await generateTokenAsync(loginMember.id, loginMember);
        loginMember.api_token = BEARER_AUTHENTICATION_SCHEMA + ' ' + encryptedToken;
        return response.status(HttpStatusCode.OK).send(loginResult.rows);
      } else {
        return response.status(HttpStatusCode.BAD_REQUEST).send('password is incorrect');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async (request, response, next) => {
  try {
    const db = await dbConnection.get();

    const userId = request.decodedToken.id;

    const loginResult = await db.query(
      `
      SELECT ${USERS_TABLE}.* ,
      array_to_json(array_agg(${POSTS_TABLE}.*)) as detail_posts,
      array_to_json(array_agg(${NOTIFICATION_TABLE}.*)) as detail_notifications
      FROM ${USERS_TABLE}
      LEFT JOIN ${POSTS_TABLE} ON ${POSTS_TABLE}.id = ANY(${USERS_TABLE}.post_ids)
      LEFT JOIN ${NOTIFICATION_TABLE} ON ${NOTIFICATION_TABLE}.user_id = ${USERS_TABLE}.id
      WHERE ${USERS_TABLE}.id = $1
      GROUP BY ${USERS_TABLE}.id;
    `,
    [16]
      // [userId]
    );

    if (loginResult.rows[0]) {
      let userProfile = loginResult.rows[0];
      delete userProfile.hashed_password;
      return response.status(HttpStatusCode.OK).send(userProfile);
    }
  } catch (error) {
    console.log(error);
  }
};
