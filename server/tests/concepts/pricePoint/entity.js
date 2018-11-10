const { expect } = require('chai')
const PricePoint = require('../../../concepts/pricePoint/entity')

describe('PricePoint', () => {
  it('has currencyType', () => {
    let pricePoint = new PricePoint({ currencyType: 'USD', cryptoType: 'BTC'})
    expect(pricePoint.currencyType).to.not.be.undefined
  })

  it('has cryptoType', () => {
    let pricePoint = new PricePoint({ currencyType: 'USD', cryptoType: 'ETH'})
    expect(pricePoint.cryptoType).to.not.be.undefined
  })
})