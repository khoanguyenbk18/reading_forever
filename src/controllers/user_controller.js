import dbConnection from '../database';
import HttpStatusCode from 'http-status-codes';

const USERS_TABLE = 'users';

export async function register(request, response, next) {
  try {
    const db = await dbConnection.get();
    const userRequestBody = request.body;
    console.log(userRequestBody);
    const userRegister = await db.query(
      `INSERT INTO ${USERS_TABLE} (username, password, avatar, email, gender, dob, role)
    VALUES ('${userRequestBody.username}','${userRequestBody.password}','${userRequestBody.avatar}','${userRequestBody.email}','${userRequestBody.gender}','${userRequestBody.dob}',${userRequestBody.role}) RETURNING ${USERS_TABLE}.id;`
    );
    // const data = userRegister.rows;
    return response.status(HttpStatusCode.OK).send(userRegister);
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
