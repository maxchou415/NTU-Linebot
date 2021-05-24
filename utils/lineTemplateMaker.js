module.exports.makeBubbleTemplate = (title, text, actions = []) => {
  return {
    type: 'template',
    altText: title || text || '請至智慧手機上確認訊息內容。',
    template: {
      type: 'buttons',
      ...(title ? { title } : {}),
      ...(text ? { text } : {}),
      actions
    }
  }
}

module.exports.makePostbackAction = (label, data) => {
  return { type: 'postback', label, data }
}

module.exports.makeMessageAction = (label, text) => {
  return { type: 'message', label, text }
}

module.exports.makeUriAction = (label, uri) => {
  return { type: 'uri', label, uri }
}
