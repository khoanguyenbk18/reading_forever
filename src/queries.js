import {Pool} from 'pg';
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SampleDB',
  port: 5432,
  password: 'postgres'
});

const CUSTOMER_TABLE = 'customer';

export const getCustomers = (request, response) => {
  console.log('run get customer');
  pool.query(`SELECT * FROM ${CUSTOMER_TABLE}`, (error, result) => {
    if (error) {
      throw error;
    }
    response.status(200).json(result.rows);
  });
};
