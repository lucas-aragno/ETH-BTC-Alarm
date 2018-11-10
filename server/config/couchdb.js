const nano = require('nano')("http://admin:password@couchdb:5984")

const pricePointsDB = nano.db.use('price_points')

console.log('pricePointDB is ', pricePointsDB)

module.exports = {
  pricePointsDB
}