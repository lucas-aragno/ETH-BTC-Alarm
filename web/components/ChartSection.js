import React, { Component } from 'react'
import Chart from './chart'
import { chartIds } from '../constants'

export default class ChartSection extends Component {
  render () {
    return (
      <div className="flex mb-4">
        <Chart chartId={chartIds.btcChart} />
        <Chart chartId={chartIds.ethChart} />
      </div>
    )
  }
}