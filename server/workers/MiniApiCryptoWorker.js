const { logInfo, logError } = require('../config/logger')
const getFromService = require('../concepts/pricePoint/operations/getFromService')
const store = require('../concepts/pricePoint/operations/store')

class MiniApiCryptoWorker {
  constructor ({ cryptoService, repository, minutes }) {
    this._cryptoService = cryptoService
    this._repository = repository
    this._minutes = minutes * 60 * 1000
  }

  run () {
    setInterval(async () => {
      logInfo({ message: 'Performing request' })
      try {
        let ethValue = await getFromService({ cryptoType: 'ETH', serviceCall: this._cryptoService.getInfoForCurrency })
        let btcValue = await getFromService({ cryptoType: 'BTC', serviceCall: this._cryptoService.getInfoForCurrency })
        let timestamp = Math.round(+new Date()/1000);
        let stored = await store({ ethValue, btcValue, repository: this._repository, timestamp })
        logInfo({ message: `Stored ${stored} succesfully`})
      } catch (error) {
        logError({message: error})
      }
    }, this._minutes)
  }
}

module.exports = MiniApiCryptoWorker