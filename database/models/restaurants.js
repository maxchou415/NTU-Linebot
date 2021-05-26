const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class restaurants extends Model {
    static associate (models) {
    }
  };
  restaurants.init({
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    geometry: DataTypes.GEOMETRY('POINT'),
    rating: DataTypes.INTEGER,
    featurePhotoSrc: DataTypes.TEXT,
    url: DataTypes.TEXT,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'restaurants'
  })

  return restaurants
}
