const MySql = require("mysql");

/**
 * If you are facing issues while connecting to database with errno: 1251, sqlState: '08004',
 * then run following command
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 */
const createDbConnection = () => {
  const db = MySql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD
  });

  db.connect((err, data) => {
    if (err) {
      console.log("Connection to database failed");
      throw new Error(err);
    }

    console.log("Database connection success");
  });

  global.db = db;
}

createDbConnection();

// module.exports = createDbConnection;
