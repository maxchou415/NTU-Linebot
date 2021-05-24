const secretList = {
  TELEPORT_POINT: '傳送點'
}

Object.keys(secretList).forEach(key => {
  exports['SECRET_' + key] = secretList[key]
})
