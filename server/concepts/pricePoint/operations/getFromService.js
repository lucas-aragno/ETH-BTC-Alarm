const getFromService = async ({ cryptoType, serviceCall }) => {
  let { data } = await serviceCall({cryptoType})
  return data
}

module.exports = getFromService