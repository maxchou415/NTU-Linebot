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
  }
}
