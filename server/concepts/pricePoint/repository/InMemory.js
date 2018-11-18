class InMemory {
  constructor () {
    this._pricePoints = []
  }

  insert ({ pricepoint }) {
    this._pricePoints.push(pricepoint)
  }

  remove ({ timestamp }) {
    this._pricePoints.filter(pricepoint => pricepoint.timestamp === timestamp)
  }
}