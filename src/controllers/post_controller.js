import dbConnection, {POSTS_TABLE, USERS_TABLE, CATEGORIES_TABLE} from '../database';
import HttpStatusCode from 'http-status-codes';

const PAGE_SIZE = 10;

export async function getListPosts(request, response, next) {
  try {
    const pageNumber = request.query.pageNumber ? request.query.pageNumber : 1;
    console.log('TCL: getListPosts -> pageNumber', pageNumber);
    const OFFSET = (pageNumber - 1) * PAGE_SIZE;
    const db = await dbConnection.get();
    const result = await db.query(`
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    ORDER BY p.created_date DESC
    LIMIT ${PAGE_SIZE} OFFSET ${OFFSET}`);

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
    const result = await db.query(`
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    ORDER BY p.views_count DESC
    LIMIT ${LIMIT}`);

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
    const result = await db.query(`
    SELECT p.*, u.username , c.name
    FROM ${POSTS_TABLE} p
    INNER JOIN ${USERS_TABLE} u ON p.post_creator_id = u.id
    INNER JOIN ${CATEGORIES_TABLE} c ON p.category = c.id
    WHERE document_vectors @@ plainto_tsquery('${queryString}')
    ORDER BY p.views_count DESC
    LIMIT ${LIMIT}
    `);

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
