import {Pool} from 'pg';

const dotenv = require('dotenv');
dotenv.config();

export const USERS_TABLE = 'users';
export const POSTS_TABLE = 'posts';
export const COMMENT_TABLE = 'comments';
export const CATEGORIES_TABLE = 'categories';

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgres://
${process.env.DB_USER}:${process.env.DB_PASSWORD}
@
${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

//Singleton
const dbConnection = () => {
  let pool = null;

  const initDB = async () => {
    try {
      pool = new Pool({
        connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
        ssl: isProduction
      });
      console.log(connectionString);
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
