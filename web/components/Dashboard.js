import React, { Component } from 'react'

import Header from '../components/Header'
import ChartSection from '../components/ChartSection'

export default class Dashboard extends Component {
  render () {
    return (
      <div className="flex-1 bg-blue text-white">
        <Header />
        <ChartSection />    
      </div>
    )
  }
}