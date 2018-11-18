import React, { Component } from 'react'
import { chartLoaded } from '../lib/events'

class Chart extends Component {
  componentDidMount () {
    document.body.dispatchEvent(chartLoaded)
  }

  render () {
    return (
      <div className="w-full sm:w-full md:w-1/2 bg-white h-full pt-5">
        <canvas id="lineChart"></canvas>
      </div>
    )
  }
}

export default Chart