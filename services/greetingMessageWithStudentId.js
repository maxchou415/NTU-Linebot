const utils = require('@utils')
const services = require('@services')

module.exports = ({ res, studentId }) => {
  const departmentName = utils.studentDepartmentMapper({ studentId })
  if (!departmentName) {
    services.invalidStudentId({ res })
    return
  }
  res.send(utils.messageGenerator.greetingMessageWithStudentId({ departmentName }))
}
