import {Pool} from 'pg';

// const USERS_TABLE = 'users';
// const POSTS_TABLE = 'posts';
// const COMMENT_TABLE = 'comments';

// export const getLastestPosts = (request, response) => {
//   const CREATED_DATE_DESC = `${POSTS_TABLE}.created_date DESC`;
//   pool.query(`SELECT * FROM ${POSTS_TABLE} ORDER BY ${CREATED_DATE_DESC}`, (error, result) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(result.rows);
//   });
// };

// export const login = (request, response) => {
//   pool.query(`SELECT * FROM ${USERS_TABLE}`, (error, result) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(result.rows);
//   });
// };

//Singleton
const dbConnection = () => {
  let pool = null;

  const initDB = async () => {
    try {
      pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'SampleDB',
        port: 5432,
        password: 'postgres'
      });
      const client = await pool.connect();
      return client;
    } catch (error) {
      console.log(error);
    }
  };

  const get = async () => {
    try {
      if (pool != null) {
        console.log('already connected');
        return pool;
      } else {
        pool = await initDB();
        return pool;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    get
  };
};

export default dbConnection();
