import {Pool} from 'pg';

export const USERS_TABLE = 'users';
export const POSTS_TABLE = 'posts';
export const COMMENT_TABLE = 'comments';
export const CATEGORIES_TABLE = 'categories';

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
