class CouchDB {
  constructor ({database}) {
    this._database = database
  }

  insert({ object, key }) {
    return new Promise((resolve, reject) => {
      this._database.insert(object, key).then(body => {
        resolve(body)
      }).catch((error) => reject(error))
    })
  }

  getLastEntries() {
    return new Promise((resolve, reject) => {
      let query = {
        limit: 4,
        descending: true
      }
      this._database.find(query).then(doc => {
        resolve(doc)
      }).catch((error) => reject(error))
    })
  }
}

module.exports = CouchDB