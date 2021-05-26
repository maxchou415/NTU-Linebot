const utils = require('@utils')
const services = require('@services')
// const response = utils.lineMessageSender

const wordingMap = {
  ...utils.wordingMap.line.incoming,
  ...utils.secretList
}

module.exports = ({ event, request, response }) => {
  const incomingMessage = event.message.text
  // If is the message is a student id number
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
    services.greetingMessageWithStudentId({
      res: response,
      studentId
    })
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
      services[[utils.functionMapping[functionMappingKey]]]({ res: response })
    } catch (error) {
      services.serverError({ res: response })
      return
    }
    return
  }

  // Unknown Text Command
  console.log('=== unregisteredMessage ===')
  services.unregisteredMessage({ res: response })
}
