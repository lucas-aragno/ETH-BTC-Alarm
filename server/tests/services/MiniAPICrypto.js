const axios = require('axios')
const { expect } = require('chai')
const MiniApiCrypto = require('../../services/MiniApiCrypto')

describe('MiniApiCrypto', () => {
  it('returns values for ETH', async () => {
    let miniApiCryptoClient = new MiniApiCrypto({ httpClient: axios })
    let { data } = await miniApiCryptoClient.getInfoForCurrency({ cryptoType: 'ETH'})
    expect(data).to.have.property('USD')
  })

  it('returns values for BTC', async () => {
    let miniApiCryptoClient = new MiniApiCrypto({ httpClient: axios })
    let { data } = await miniApiCryptoClient.getInfoForCurrency({ cryptoType: 'BTC'})
    expect(data).to.have.property('USD')
  })
})