const Sequelize = require('sequelize');

//allow for use of .env data
require('dotenv').config();

// create connection to db, whether local on on heroku using jawsdb
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;