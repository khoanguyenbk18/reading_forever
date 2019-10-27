import {Pool} from 'pg';

const dotenv = require('dotenv');
dotenv.config();

export const USERS_TABLE = 'users';
export const POSTS_TABLE = 'posts';
export const COMMENT_TABLE = 'comments';
export const CATEGORIES_TABLE = 'categories';

const isProduction = true;

//Singleton
const dbConnection = () => {
  let pool = null;

  const initDB = async () => {
    try {
      if(isProduction){
        pool = new Pool({
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          ssl: true
        });
      }else{
        pool = new Pool({
          user: process.env.LOCAL_DB_USER,
          host: process.env.LOCAL_DB_HOST,
          port: process.env.LOCAL_DB_PORT,
          password: process.env.LOCAL_DB_PASSWORD,
          database: process.env.LOCAL_DB_DATABASE,
          ssl: true
        });
      }

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
