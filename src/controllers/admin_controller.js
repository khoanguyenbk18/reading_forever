import dbConnection, {
  POSTS_TABLE,
  USERS_TABLE,
  COMMENTS_TABLE,
  REPORT_TABLE,
  NOTIFICATION_TABLE
} from '../database';
import HttpStatusCode from 'http-status-codes';
import {RoleEnum} from '../lib/enums/role_enum';

export async function getListReports(request, response, next) {
  const db = await dbConnection.get();
  try {
    if (request.decodedToken.role !== RoleEnum.ADMIN) {
      return response.status(HttpStatusCode.UNAUTHORIZED).send("You're not the admin.");
    }

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
export async function rejectReports(request, response, next) {
  const db = await dbConnection.get();
  try {
    if (request.decodedToken.role !== RoleEnum.ADMIN) {
      return response.status(HttpStatusCode.UNAUTHORIZED).send("You're not the admin.");
    }
    const reportId = request.body.reportId;
    const deleteReportResult = await db.query(
      `
    DELETE FROM ${REPORT_TABLE}
    WHERE id =$1`,
      [reportId]
    );
    console.log('TCL: deletePost -> rejectReport ', reportId)
    return response.status(HttpStatusCode.OK).send('Reject Report Successfully');
  } catch (error) {
    console.log(error);
  }
}
export async function deletePost(request, response, next) {
  const db = await dbConnection.get();

  try {
    if (request.decodedToken.role !== RoleEnum.ADMIN) {
      return response.status(HttpStatusCode.UNAUTHORIZED).send("You're not the admin.");
    }
    const reportId = request.body.reportId;
    console.log('TCL: deletePost -> reportId', reportId);
    var idPost = await db.query(
      `
      SELECT post_id
      FROM ${REPORT_TABLE}
      WHERE id = $1
      `, [reportId]
    )
    var postId = idPost.rows[0].post_id;
    console.log('TCL: deletePost -> postId', postId);
    var CreatorId = await db.query(
    `
    SELECT post_creator_id
    FROM ${POSTS_TABLE}
    WHERE id = $1
    `, [postId]
    );
    var postCreatorId = CreatorId.rows[0].post_creator_id
    console.log('TCL: deletePost -> postCreatorId', postCreatorId);
    //detele post from posts table
    const deletePostResult = await db.query(
      `
    DELETE FROM ${POSTS_TABLE}
    WHERE id =$1`,
      [postId]
    );
    console.log('TCL: deletePost -> deletePostResult', deletePostResult);

    //delete all comments from comments table related to post
    const deleteCommentResult = await db.query(
      `
    DELETE FROM ${COMMENTS_TABLE}
    WHERE post_id =$1`,
      [postId]
    );
    console.log('TCL: deletePost -> deleteCommentResult', deleteCommentResult);

    //delete all notifications from notifications table related to posts
    const deleteNotificationResult = await db.query(
      `
    DELETE FROM ${NOTIFICATION_TABLE}
    WHERE post_id =$1`,
      [postId]
    );
    console.log('TCL: deletePost -> deleteNotificationResult', deleteNotificationResult);

    // delete all report from reports table related to post
    const deleteReportResult = await db.query(
    `
    DELETE FROM ${REPORT_TABLE}
    WHERE id =$1`,
      [reportId]
    );
    console.log('TCL: deletePost -> deleteReportResult', deleteReportResult);

    //remove post id from array post_ids from users table
    const deletePostIdUserResult = await db.query(
      `
    UPDATE ${USERS_TABLE} SET post_ids = array_remove(post_ids,$1)
    WHERE id = $2
    `,
      [postId, postCreatorId]
    );
    console.log('TCL: deletePost -> deletePostIdUserResult', deletePostIdUserResult);

    return response.status(HttpStatusCode.OK).send('Delete permantely Successfully');
  } catch (error) {
    console.log(error);
  }
}
