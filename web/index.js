import 'whatwg-fetch'
import React from 'react'
import babelPolyfill from 'babel-polyfill'
import { render } from 'react-dom'

import 'tailwindcss/dist/tailwind.min.css'
import Root from './components/Root'
import { loadCharts } from './lib/charts'
import './styles/base.css'

document.body.addEventListener('chartLoaded', loadCharts)

render(
  <div>
    <Root />
  </div>,
  document.getElementById('root')
)
