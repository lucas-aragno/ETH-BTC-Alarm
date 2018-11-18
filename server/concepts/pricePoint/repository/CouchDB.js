const CouchDBBaseRepository = require('../../../repositories/CouchDB')
const { collections } = require('../../../config/database')

class PricePointCouchDBRepository {
  constructor () {
    super({database: collections.pricePoints})
  }
}

module.exports = PricePointCouchDBRepository