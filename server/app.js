const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { logInfo } = require('./config/logger')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.API_PORT || 3000, () => {
  logInfo({ message: 'Running in port 3000' })
})