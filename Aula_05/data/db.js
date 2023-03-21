const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "template1",
  password: "121316",
  port: 5432,
  ssl: false,
});

const conect = async () => {
  try {
    await pool.connect();
  } catch (e) {
    console.log("error: ", e);
  }
};

const test = () =>
  pool.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    pool.end();
  });

const createDatabase = async () => {
  try {
    await pool.query("CREATE DATABASE test"); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await pool.end(); // closes connection
  }
};

module.exports = {
  conect,
  createDatabase,
  test,
};
