import React, { Component } from 'react'

import bitcoinLogo from '../assets/bitcoin.png';

export default class Sidebar extends Component {
  render () {
    return (
      <div className="flex-none w-full sidebar text-center bg-blue-linear-gradient text-white">
        <img className="w-4 md:w-1/2 pt-3" src={bitcoinLogo} />
      </div>
    )
  }
}