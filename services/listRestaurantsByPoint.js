const config = require('config')
const models = require('@models')
const utils = require('@utils')

const geoConfig = config.get('geo')

module.exports = async ({ req, res }) => {
  const { latitude, longitude } = req

  let restaurants
  try {
    restaurants = await models.restaurants.findAll({
      where: models.Sequelize.where(
        models.Sequelize.fn('ST_DWithin',
          models.Sequelize.col('geometry'),
          models.Sequelize.fn('ST_SetSRID',
            models.Sequelize.fn('ST_MakePoint',
              longitude, latitude
            ),
            4326
          ),
          geoConfig.degree
        ),
        true
      ),
      limit: 10
    })
  } catch (error) {
    console.error(error)
    return
  }
  restaurants = JSON.parse(JSON.stringify(restaurants))
  if (restaurants.length <= 0) {
    res.send(utils.messageGenerator.restaurantsNotFound())
    return
  }
  res.send(utils.messageGenerator.listRestaurants({ restaurants }))
}
