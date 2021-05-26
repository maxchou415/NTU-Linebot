const utils = require('@utils')

module.exports = ({ res }) => {
  res.send(utils.messageGenerator.invalidStudentId())
}
