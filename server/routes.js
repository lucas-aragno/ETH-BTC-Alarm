const router = require('express').Router()

router.use('/pricePoints', require('./concepts/pricePoint/routes'))

module.exports = router