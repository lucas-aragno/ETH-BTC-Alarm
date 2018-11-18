const router = require('express').Router()

router.use('/pricePoints', require('./concepts/pricePoint/routes'))

router.get('/health', (req, res) => {
  res.status(200).send('service healthy')
})

module.exports = router