const API_URL = process.env.MINICRYPTO_API

const apiURLFor = ({cryptoType}) => `${API_URL}?fsym=${cryptoType}&tsyms=USD`

class MiniApiCrypto {
  constructor ({ httpClient }) {
    this._httpClient = httpClient
    this.getInfoForCurrency = this.getInfoForCurrency.bind(this)
  }

  async getInfoForCurrency ({ cryptoType }) {
    const value = await this._httpClient.get(apiURLFor({cryptoType}))
    return value
  }
}

module.exports = MiniApiCrypto