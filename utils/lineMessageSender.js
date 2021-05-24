const linebotHelper = require('./linebotHelper')

async function sender (message) {
  try {
    linebotHelper.reply(this.data.replyToken, message)
    console.log('LineMessageSender: Message Sent Successful.')
    return
  } catch (error) {
    console.log('LineMessageSender ERROR: ', error)
  }
}

module.exports = sender
module.exports.send = sender
