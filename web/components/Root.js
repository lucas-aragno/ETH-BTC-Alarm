import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard';

export default class Root extends Component {
  render () {
    return (
      <div className='min-h-screen md:flex'>
        <Sidebar />
        <Dashboard />
      </div>
    )
  }
}
