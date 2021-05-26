const config = require('config')

module.exports = {
  database: config.get('database.database'),
  username: config.get('database.username'),
  password: config.get('database.password'),
  host: config.get('database.host'),
  port: config.get('database.port'),
  dialect: config.get('database.dialect'),
  pool: config.get('database.pool'),
  define: {
    paranoid: true,
    timestamp: true
  }
}
