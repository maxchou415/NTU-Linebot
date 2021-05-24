const config = require('config')
const linebot = require('linebot')

module.exports = linebot({
  channelId: config.get('line.channelId'),
  channelSecret: config.get('line.channelSecret'),
  channelAccessToken: config.get('line.channelAccessToken')
})
