const CouchDBBaseRepository = require('../../../repositories/CouchDB')
const { pricePointsDB } = require('../../../config/couchdb')

class PricePointCouchDBRepository extends CouchDBBaseRepository {
  constructor () {
    super({database: pricePointsDB})
  }
}

module.exports = PricePointCouchDBRepository