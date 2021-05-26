require('dotenv').config()

module.exports = {
  app: {
    webhook: {
      port: process.env.port || 5000,
      secret: process.env.WEBHOOK_SECRET
    }
  },
  line: {
    channelId: process.env.LINE_CHANNEL_ID,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
  },
  geo: {
    degree: process.env.GEO_DEGREE || 0.005
  },
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
