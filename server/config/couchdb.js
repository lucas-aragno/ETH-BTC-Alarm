const nano = require('nano')("http://admin:password@couchdb:5984")
const { collections } = require('../config/database')

const pricePointsDB = nano.db.use(collections.pricePoints)

module.exports = {
  pricePointsDB
}