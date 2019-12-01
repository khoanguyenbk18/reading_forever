import dbConnection, {
  POSTS_TABLE,
  USERS_TABLE,
  CATEGORIES_TABLE,
  COMMENTS_TABLE,
  REPORT_TABLE
} from '../database';
import HttpStatusCode from 'http-status-codes';
import {PostStatusEnum} from '../lib/enums/post_status_enum';
const PAGE_SIZE = 10;

export async function getListPosts(request, response, next) {
  const db = await dbConnection.get();
  try {
    const pageNumber = request.query.pageNumber ? request.query.pageNumber : 1;
    console.log('TCL: getListPosts -> pageNumber', pageNumber);
    const OFFSET = (pageNumber - 1) * PAGE_SIZE;
    const result = await db.query(
      `
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    WHERE p.status = $1
    ORDER BY p.created_date DESC
    LIMIT ${PAGE_SIZE} OFFSET ${OFFSET}`,
      [PostStatusEnum.ACCEPT]
    );

    const rowcountResult = await db.query(`
    SELECT COUNT(*) FROM ${POSTS_TABLE}`);
    const rowCount = rowcountResult.rows[0].count;

    result.rows.map(post => {
      if (post.hasOwnProperty('name')) {
        post.category_name = post.name;
        delete post.name;
      }
      return post;
    });
    let responseData = {
      data: result.rows,
      pageNumber: pageNumber,
      totalPage: rowCount / PAGE_SIZE
    };

    return response.status(HttpStatusCode.OK).send(responseData);
  } catch (error) {
    console.log(error);
  }
}

export async function getListPostsPending(request, response, next) {
  try {
    const db = await dbConnection.get();

    const result = await db.query(
      `
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    WHERE p.status = $1
    ORDER BY p.created_date DESC
    LIMIT 10`,
      [PostStatusEnum.PENDING]
    );

    result.rows.map(post => {
      if (post.hasOwnProperty('name')) {
        post.category_name = post.name;
        delete post.name;
      }
      return post;
    });
    let responseData = {
      data: result.rows
    };

    return response.status(HttpStatusCode.OK).send(responseData);
  } catch (error) {
    console.log(error);
  }
}

export async function getListPostsByCategory(request, response, next) {
  try {
    const categoryId = request.query.categoryId;
    const db = await dbConnection.get();
    const result = await db.query(
      `
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    WHERE p.status = $1 AND c.id = $2
    ORDER BY p.created_date DESC`,
      [PostStatusEnum.ACCEPT, categoryId]
    );

    result.rows.map(post => {
      if (post.hasOwnProperty('name')) {
        post.category_name = post.name;
        delete post.name;
      }
      return post;
    });
    let responseData = {
      data: result.rows
    };

    return response.status(HttpStatusCode.OK).send(responseData);
  } catch (error) {
    console.log(error);
  }
}

export async function getListCategories(request, response, next) {
  try {
    const db = await dbConnection.get();
    const result = await db.query(`
    SELECT *
    FROM ${CATEGORIES_TABLE}`);

    return response.status(HttpStatusCode.OK).send(result.rows);
  } catch (error) {
    console.log(error);
  }
}

export async function getListMostPopular(request, response, next) {
  try {
    const db = await dbConnection.get();
    const LIMIT = 5;
    const result = await db.query(
      `
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    WHERE p.status = $1
    ORDER BY p.views_count DESC
    LIMIT ${LIMIT}`,
      [PostStatusEnum.ACCEPT]
    );

    result.rows.map(post => {
      if (post.hasOwnProperty('name')) {
        post.category_name = post.name;
        delete post.name;
      }
      return post;
    });

    return response.status(HttpStatusCode.OK).send(result.rows);
  } catch (error) {
    console.log(error);
  }
}

export async function searchPosts(request, response, next) {
  try {
    let queryString = request.query.queryString;
    const db = await dbConnection.get();
    const LIMIT = 5;
    const result = await db.query(
      `
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    WHERE p.status = $1 AND document_vectors @@ plainto_tsquery($2)
    ORDER BY p.views_count DESC
    LIMIT ${LIMIT}
    `,
      [PostStatusEnum.ACCEPT, queryString]
    );

    result.rows.map(post => {
      if (post.hasOwnProperty('document_vectors')) {
        // post.category_name = post.name;
        delete post.document_vectors;
      }
      return post;
    });

    return response.status(HttpStatusCode.OK).send(result.rows);
  } catch (error) {
    console.log(error);
  }
}

export async function acceptPost(request, response, next) {
  const db = await dbConnection.get();
  let userRequestBody = request.body;
  const acceptPostId = userRequestBody.postId;

  try {
    const result = await db.query(
      `
      UPDATE ${POSTS_TABLE}
      SET status = ${PostStatusEnum.ACCEPT}
      WHERE id = $1
    `,
      [acceptPostId]
    );

    return response.status(HttpStatusCode.OK).send('Update sucessfully');
  } catch (error) {
    console.log(error);
  }
}

export async function rejectPost(request, response, next) {
  const db = await dbConnection.get();
  let userRequestBody = request.body;
  const rejectPostId = userRequestBody.postId;

  try {
    const result = await db.query(
      `
      UPDATE ${POSTS_TABLE}
      SET status = ${PostStatusEnum.REJECT}
      WHERE id = $1
    `,
      [rejectPostId]
    );

    return response.status(HttpStatusCode.OK).send('Update sucessfully');
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(request, response, next) {
  const db = await dbConnection.get();
  let postRequestBody = request.body;
  console.log('TCL: createPost -> postRequestBody', postRequestBody);
  let postCreator = request.decodedToken;
  console.log('TCL: createPost -> postCreator', postCreator);

  const postInsertBody = {
    title: postRequestBody.title,
    image: postRequestBody.image,
    author: postRequestBody.author,
    publish_date: postRequestBody.publish_date,
    category_id: postRequestBody.category_id,
    content: postRequestBody.content,
    status: PostStatusEnum.PENDING,
    created_date: new Date(),
    post_creator_id: postCreator.id
  };
  try {
    const resultInsertPost = await db.query(
      `
    INSERT INTO ${POSTS_TABLE}
    (title,image, author, publish_date, category, content, status, post_creator_id, created_date,document_vectors)
    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8,$9,to_tsvector($10)||to_tsvector($11)||to_tsvector($12))
    RETURNING id
    `,
      [
        postInsertBody.title,
        postInsertBody.image,
        postInsertBody.author,
        postInsertBody.publish_date,
        postInsertBody.category_id,
        postInsertBody.content,
        postInsertBody.status,
        postInsertBody.post_creator_id,
        postInsertBody.created_date,
        postInsertBody.title,
        postInsertBody.author,
        postInsertBody.content
      ]
    );

    const postId = resultInsertPost.rows[0].id;

    // insert post to post_ids of users table
    const insertPostToUserResult = await db.query(
      `
    UPDATE ${USERS_TABLE}
    SET post_ids = array_append(post_ids,$1)
    WHERE ${USERS_TABLE}.id = $2`,
      [postId, postInsertBody.post_creator_id]
    );

    console.log('TCL: createPost -> insertPostToUserResult', insertPostToUserResult);

    return response.status(HttpStatusCode.OK).send('Sending post successfully');
  } catch (error) {
    console.log(error);
  }
}

export async function getPostDetail(request, response, next) {
  const db = await dbConnection.get();
  const postId = request.query.postId;
  console.log('TCL: getPostDetail -> postId', postId);
  try {
    const resultPostDetail = await db.query(
      `
    SELECT
    ${POSTS_TABLE}.id,
    ${POSTS_TABLE}.title,
    ${POSTS_TABLE}.image,
    ${POSTS_TABLE}.content,
    ${POSTS_TABLE}.author,
    ${POSTS_TABLE}.publish_date,
    ${POSTS_TABLE}.category,
    ${POSTS_TABLE}.views_count,
    ${POSTS_TABLE}.status,
    ${POSTS_TABLE}.post_creator_id,
    ${POSTS_TABLE}.created_date,
    ${USERS_TABLE}.username,
    array_to_json(array_agg(${COMMENTS_TABLE}.*)) as detail_comments
    FROM ${POSTS_TABLE}
    LEFT JOIN ${COMMENTS_TABLE} ON ${COMMENTS_TABLE}.id = ANY(${POSTS_TABLE}.comment_ids)
    LEFT JOIN ${USERS_TABLE} ON ${USERS_TABLE}.id = ${POSTS_TABLE}.post_creator_id
    WHERE ${POSTS_TABLE}.id = $1
    GROUP BY ${POSTS_TABLE}.id, ${USERS_TABLE}.id
    `,
      [postId]
    );

    if (resultPostDetail.rows[0]) {
      const postDetail = resultPostDetail.rows[0];
      postDetail.post_creator_username = postDetail.username;
      delete postDetail.username;
    }

    return response.status(HttpStatusCode.OK).send(resultPostDetail.rows[0]);
  } catch (error) {
    console.log('TCL: error', error);
  }
}

export async function createComment(request, response, next) {
  const db = await dbConnection.get();
  let commentRequestBody = request.body;
  console.log('TCL: createComment -> commentRequestBody', commentRequestBody);
  let commentator = request.decodedToken;
  console.log('TCL: createComment -> commentator', commentator);

  const commentInsertBody = {
    commentator_username: commentator.username,
    commentator_id: commentator.id,
    post_id: commentRequestBody.postId,
    comment: commentRequestBody.comment
  };
  try {
    const resultInsertComment = await db.query(
      `
    INSERT INTO ${COMMENTS_TABLE}
    (commentator_username,commentator_id, post_id, comment)
    VALUES
    ($1,$2,$3,$4)
    RETURNING id
    `,
      [
        commentInsertBody.commentator_username,
        commentInsertBody.commentator_id,
        commentInsertBody.post_id,
        commentInsertBody.comment
      ]
    );

    const commentId = resultInsertComment.rows[0].id;
    // Update commentId to post
    const resultInsertCommentToPost = await db.query(
      `
      UPDATE ${POSTS_TABLE}
      SET comment_ids = array_append(comment_ids, $1)
      WHERE id = $2
    `,
      [commentId, commentInsertBody.post_id]
    );
    console.log('TCL: createComment -> resultInsertCommentToPost', resultInsertCommentToPost);
    return response.status(HttpStatusCode.OK).send('Sending comment successfully');
  } catch (error) {
    console.log(error);
  }
}

export async function reportPost(request, response, next) {
  const db = await dbConnection.get();
  let reportRequestBody = request.body;
  console.log('TCL: createComment -> commentRequestBody', reportRequestBody);
  let commentator = request.decodedToken;
  console.log('TCL: createComment -> commentator', commentator);

  const reportInsertBody = {
    post_id: reportRequestBody.postId,
    reporter_id: commentator.id,
    content: reportRequestBody.content
  };
  try {
    const resultInsertReport = await db.query(
      `
    INSERT INTO ${REPORT_TABLE}
    (post_id,reporter_id, content)
    VALUES
    ($1,$2,$3)
    RETURNING id
    `,
      [reportInsertBody.post_id, reportInsertBody.reporter_id, reportInsertBody.content]
    );

    const reportId = resultInsertReport.rows[0].id;
    // Update commentId to post
    console.log('TCL: createComment -> resultInsertCommentToPost', resultInsertReport);
    return response.status(HttpStatusCode.OK).send('Sending report successfully');
  } catch (error) {
    console.log(error);
  }
}
