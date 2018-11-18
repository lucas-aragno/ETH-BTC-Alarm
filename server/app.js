const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

const { logInfo } = require('./config/logger')
const { pricePointsDB } = require('./config/couchdb')
const PricePointCouchDBRepository = require('./concepts/pricePoint/repository/CouchDB')
const MiniApiCryptoWorker = require('./workers/MiniApiCryptoWorker')
const MiniApiCrypto = require('./services/MiniApiCrypto')

let pricePointRepository = new PricePointCouchDBRepository({ database: pricePointsDB })
let miniApiCryptoClient = new MiniApiCrypto({ httpClient: axios })

let cryptoServiceWorker = new MiniApiCryptoWorker({
  minutes: 1,
  repository: pricePointRepository,
  cryptoService: miniApiCryptoClient
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', require('./routes'))

app.listen(process.env.API_PORT || 3000, () => {
  logInfo({ message: 'Running in port 3000' })
  logInfo({ message: 'Starting crypto service worker' })
  cryptoServiceWorker.run()
})