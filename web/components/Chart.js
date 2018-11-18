import React, { Component } from 'react'
import { chartLoaded } from '../lib/events'
import { unixToTime } from '../lib/time'
import { chartIds } from '../constants'

const parseData = ({json, chartId}) => {
  if (json.lastEntries) {
    return json.lastEntries.rows.map((entry) => ({
      x: {
        data: chartId === chartIds.btcChart ? entry.doc.btc : entry.doc.eth
      },
      y: {
        time: unixToTime({unix: parseInt(entry.id)})
      }
    }))
  }
}

class Chart extends Component {
  componentDidMount () {
    let { chartId } = this.props
    fetch('http://localhost:3000/api/pricePoints/last')
    .then((res) => {
      return res.json()
    }).then((json) => {
      let data = {
        id: chartId,
        serialData: parseData({json, chartId})
      }
      document.body.dispatchEvent(chartLoaded({data}))
    }).catch((e) => {
      console.error('error ', e)
    })
  }

  render () {
    let { chartId } = this.props
    return (
      <div className="w-full sm:w-full md:w-1/2 bg-white h-full pt-5">
        <canvas id={chartId}></canvas>
      </div>
    )
  }
}

export default Chart