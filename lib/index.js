const phoneJson = require('./phone.json')


function getPhone (phone) {
  const data = `${phone}`.substr(1, 6)
  return phoneJson[data] || {
    p: undefined,
    c: undefined,
    o: undefined,
    zc: undefined,
    ac: undefined,
    lc: undefined
  }
}


module.exports = getPhone