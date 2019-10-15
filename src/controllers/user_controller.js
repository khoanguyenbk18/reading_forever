import dbConnection, {USERS_TABLE} from '../database';
import HttpStatusCode from 'http-status-codes';
import {RoleEnum} from '../lib/enums/role_enum';
import {validateRegisterRequest} from '../validators/member_validators';
import {
  generateTokenAsync,
  hashPasswordAsync,
  BEARER_AUTHENTICATION_SCHEMA
} from '../lib/encrytion/encryption';
export async function register(request, response, next) {
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
      (username, password, avatar, email, gender, dob, role)
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
}

export async function login(request, response, next) {
  try {
    const db = await dbConnection.get();
    const loginRequestBody = request.body;
    console.log('TCL: loginRequestBody', loginRequestBody);
    const username = loginRequestBody.username;
    const password = loginRequestBody.password;

    const userLogin = await db.query();
  } catch (error) {}
}
