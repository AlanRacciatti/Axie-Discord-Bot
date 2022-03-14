require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "database": "axiebot",
    "host": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PRODUCTION_USERNAME,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.PRODUCTION_DATABASE,
    "host": process.env.PRODUCTION_HOST,
    "dialect": process.env.PRODUCTION_DIALECT
  }
}
