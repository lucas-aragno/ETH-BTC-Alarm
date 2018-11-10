const { logInfo, logError } = require('../config/logger')

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
        let ethValue = await this._cryptoService.getInfoForCurrency({ cryptoType: 'ETH' }) 
        let btcValue = await this._cryptoService.getInfoForCurrency({ cryptoType: 'BTC' })
        let timestamp = Math.round(+new Date()/1000);
        let stored = await this._repository.insert({object: {eth: ethValue.data, btc: btcValue.data}, key: timestamp.toString()})
        logInfo({ message: `Stored ${stored} succesfully`})
      } catch (error) {
        logError({message: error})
      }
    }, this._minutes)
  }
}

module.exports = MiniApiCryptoWorker