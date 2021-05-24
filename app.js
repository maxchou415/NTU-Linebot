require('module-alias/register')

const config = require('config')
const utils = require('@utils')

const webhookPort = config.get('app.webhook.port')
const webhookSecret = config.get('app.webhook.secret')

const services = require('@services')
const response = utils.lineMessageSender
const linebotHelper = utils.linebotHelper

const wordingMap = {
  ...utils.wordingMap.line.incoming,
  ...utils.secretList
}

linebotHelper.listen(`/linewebhook?secret=${webhookSecret}`, webhookPort, function () {
  console.info(`====== [WEBHOOK] Line Bot Webhook Endpoint is running on ${webhookPort} =======`)
})

linebotHelper.on('message', async (event) => {
  // Bind line event into response object for nested function
  response.data = event

  const incomingMessage = event.message.text

  // If is student id number
  if (
    incomingMessage.length === 9 &&
    (
      incomingMessage.startsWith('B') ||
      incomingMessage.startsWith('b') ||
      incomingMessage.startsWith('t') ||
      incomingMessage.startsWith('T')
    )
  ) {
    const studentId = incomingMessage
    services.greetingMessageWithStudentId(response, { studentId })
    // TODO: Record Student ID with its device id for future feature
    return
  }

  // Function-service mapping (Dynamic function name call)
  function getKeyByValue (object, value) {
    return Object.keys(object).find(key => object[key] === value)
  }
  // Get the function name by looking up the incoming message. (convert "key" from message)
  // IncomingMessage -> IncomingMessage (key) -> FunctionMapping (key) -> Function call
  const functionMappingKey = getKeyByValue(wordingMap, incomingMessage)
  if (functionMappingKey) {
    try {
      services[[utils.functionMapping[functionMappingKey]]](response)
    } catch (error) {
      services.serverError(response)
      return
    }
  }

  // Unknown Command
  if (!Object.values(wordingMap).includes(incomingMessage)) {
    console.log('=== unregisteredMessage ===')
    services.unregisteredMessage(response)
  }
})

linebotHelper.on('follow', (event) => {
  // Bind line event into response object for nested function
  response.data = event
  services.userOnFollow(response)
})
