const services = require('@services')

module.exports = ({ event, request = { me: { lastAction: 'findRestaurants' } }, response }) => {
  const location = event.message
  if (request.me.lastAction === 'findRestaurants') {
    services.listRestaurantsByPoint({ req: location, res: response })
  }
}
