import React, { Component } from 'react'

export default class ChartSection extends Component {
  render () {
    return (
      <div className="flex mb-4">
        <div className="w-full sm:w-full md:w-1/2 bg-grey-light h-12"></div>
        <div className="w-full sm:w-full md:w-1/2 bg-grey h-12"></div>
      </div>
    )
  }
}