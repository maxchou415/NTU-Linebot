const utils = require('@utils')
const lineTemplateMaker = utils.lineTemplateMaker
const actionMap = utils.wordingMap.line.incoming

module.exports = async ({ res }) => {
  const actions = []
  Object.values(actionMap).forEach(values => {
    actions.push(
      lineTemplateMaker.makeMessageAction(
        values, values
      )
    )
  })
  res.send(utils.messageGenerator.userOnFollow({ actions }))
}
