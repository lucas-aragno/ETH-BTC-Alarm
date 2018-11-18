import React from 'react'
import babelPolyfill from 'babel-polyfill'
import { render } from 'react-dom'

import 'tailwindcss/dist/tailwind.min.css'
import Root from './components/Root'
import { loadCharts } from './lib/Charts'
import './styles/base.css'

document.body.addEventListener('chartLoaded', loadCharts, false)

render(
  <div>
    <Root />
  </div>,
  document.getElementById('root')
)
