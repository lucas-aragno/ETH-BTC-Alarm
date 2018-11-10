const axios = require('axios')
const { expect } = require('chai')
const MiniApiCrypto = require('../../../../services/MiniApiCrypto')
const getFromService = require('../../../../concepts/pricePoint/operations/getFromService')

let miniApiCryptoClient = new MiniApiCrypto({ httpClient: axios })

describe('get from service', () => {
  it('get ETH from Mini API crypto', async () => {
    let result = await getFromService({ cryptoType: 'ETH', serviceCall: miniApiCryptoClient.getInfoForCurrency })
    expect(result).to.have.property('USD')
  })

  it('get BTC from Mini API crypto', async () => {
    let result = await getFromService({ cryptoType: 'BTC', serviceCall: miniApiCryptoClient.getInfoForCurrency })
    expect(result).to.have.property('USD')
  })
})