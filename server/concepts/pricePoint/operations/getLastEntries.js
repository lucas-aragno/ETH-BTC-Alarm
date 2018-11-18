const getLastEntries = ({ repository }) => {
  let entries = await repository.getLastEntries()
  return entries
}

module.exports = getLastEntries