class InMemory {
  constructor () {
    this._pricePoints = []
  }

  add ({ pricepoint }) {
    this._pricePoints.push(pricepoint)
  }

  remove ({ timestamp }) {
    this._pricePoints.filter(pricepoint => pricepoint.timestamp === timestamp)
  }
}