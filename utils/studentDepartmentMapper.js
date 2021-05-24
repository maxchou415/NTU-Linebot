const departmentList = require('@data/departmentList.json')

module.exports = ({ studentId = 'T09902345' }) => {
  const studentIdArray = [...studentId]
  const departmentCode = `${studentIdArray[3]}${studentIdArray[4]}${studentIdArray[5]}0`

  let studentDepartment
  departmentList.forEach((department) => {
    if (department.code === departmentCode) {
      studentDepartment = department.shortForm
    } else {
      return undefined
    }
  })

  return studentDepartment
}
