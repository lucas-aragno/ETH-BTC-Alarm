class CouchDB {
  constructor ({database}) {
    this._database = database
    console.log('DB is', this._database)
  }

  insert({ object, key }) {
    return new Promise((resolve, reject) => {
      console.log('DB is', this._database)
      this._database.insert(object, key).then(body => {
        resolve(body)
      }).catch((error) => reject(error) )
    })
  }
}

module.exports = CouchDB