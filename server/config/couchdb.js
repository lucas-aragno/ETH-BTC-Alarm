const nano = require('nano')(process.env.COUCHDB_URI)
const { collections } = require('../config/database')

const pricePointsDB = nano.db.use(collections.pricePoints)

module.exports = {
  pricePointsDB
}