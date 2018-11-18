const getLastEntries = async ({ repository }) => {
  let entries = await repository.getLastEntries()
  return entries
}

module.exports = getLastEntries