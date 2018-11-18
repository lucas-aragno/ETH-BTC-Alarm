const router = require('express').Router()
const getLastEntries = require('./operations/getLastEntries')
const PricePointRepository = require('./repository/CouchDB')

const PricePointCollection = new PricePointRepository()

router.get('/last', async (req, res) => {
  try {
    let lastEntries = await getLastEntries({repository: PricePointCollection})
    res.send({lastEntries})
  } catch (error) {{
    res.status(500).send({error})
  }}
})

module.exports = router