let chartLoaded = ({data}) => new CustomEvent('chartLoaded', {'detail': data})

export {
  chartLoaded
}