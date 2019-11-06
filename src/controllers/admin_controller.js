import dbConnection, {
  POSTS_TABLE,
  USERS_TABLE,
  CATEGORIES_TABLE,
  COMMENTS_TABLE,
  REPORT_TABLE
} from '../database';
import HttpStatusCode from 'http-status-codes';
import {RoleEnum} from '../lib/enums/role_enum';

export async function getListReports(request, response, next) {
  try {
    if (request.decodedToken.role !== RoleEnum.ADMIN) {
      return response.status(HttpStatusCode.UNAUTHORIZED).send("You're not the admin.");
    }

    const db = await dbConnection.get();
    const result = await db.query(
      `
    SELECT * FROM ${REPORT_TABLE}
    `
    );

    let responseData = {
      data: result.rows
    };

    return response.status(HttpStatusCode.OK).send(responseData);
  } catch (error) {
    console.log(error);
  }
}
export async function deletePost(request, response, next) {
  try {
    if (request.decodedToken.role !== RoleEnum.ADMIN) {
      return response.status(HttpStatusCode.UNAUTHORIZED).send("You're not the admin.");
    }
    const {postId, reportId} = request.body;
    console.log('TCL: deletePost -> reportId', reportId);
    console.log('TCL: deletePost -> postId', postId);
    if (postId === null || reportId === null) {
      return response.status(HttpStatusCode.BAD_REQUEST).send('Require post id and report id.');
    }
    const db = await dbConnection.get();

    //detele post from posts table
    //delete all comments from comments table related to post
    //delete all notifications from notifications table related to posts
    //delete all report from reports table related to post
    //remove post id from array post_ids from users table

    // const result = await db.query(
    //   `
    // DELETE * FROM ${REPORT_TABLE}
    // WHERE id = $1
    // `,
    //   [reportId]
    // );

    // let responseData = {
    //   data: result.rows
    // };

    return response.status(HttpStatusCode.OK).send(responseData);
  } catch (error) {
    console.log(error);
  }
}
