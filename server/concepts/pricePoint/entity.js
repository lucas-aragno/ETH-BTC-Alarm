class PricePoint {
  constructor ({ currencyType, cryptoType }) {
    this._currencyType = currencyType
    this._cryptoType = cryptoType
  }

  get cryptoType () {
    return this._cryptoType
  }

  get currencyType () {
    return this._currencyType
  }
}

module.exports = PricePoint