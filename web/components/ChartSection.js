import React, { Component } from 'react'
import Chart from './Chart'

export default class ChartSection extends Component {
  render () {
    return (
      <div className="flex mb-4">
        <Chart />
        <Chart />
      </div>
    )
  }
}