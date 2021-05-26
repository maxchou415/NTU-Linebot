require('module-alias/register')

const config = require('config')
const utils = require('@utils')

const webhookPort = config.get('app.webhook.port')
const webhookSecret = config.get('app.webhook.secret')

const controllers = require('./controllers')
const services = require('@services')
const response = utils.lineMessageSender
const linebotHelper = utils.linebotHelper

linebotHelper.listen(`/linewebhook?secret=${webhookSecret}`, webhookPort, function () {
  console.info(`====== [WEBHOOK] Line Bot Webhook Endpoint is running on ${webhookPort} =======`)
})

linebotHelper.on('message', async (event) => {
  response.data = event

  const messageType = event.message.type
  switch (messageType) {
    case 'text':
      controllers.text({ event, response })
      break
    case 'location':
      controllers.location({ event, response })
      break
  }
})

linebotHelper.on('follow', (event) => {
  response.data = event
  services.userOnFollow({ res: response })
})

;(async () => {
  try {
    await require('./database/models').testConnection()
    console.info('=== PostgreSQL is connected ===')
  } catch (error) {
    console.error(error)
    throw new Error('Database Connection Error: Failed to connect to the database.')
  }
})()
