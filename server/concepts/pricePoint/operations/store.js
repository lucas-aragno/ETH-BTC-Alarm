const store = async ({ ethValue, btcValue, timestamp, repository }) => {
  let stored = await repository.insert({object: {eth: ethValue.data, btc: btcValue.data}, key: timestamp.toString()})
  return stored
}

module.exports = store