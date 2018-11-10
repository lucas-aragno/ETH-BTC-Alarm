import React from 'react'
import babelPolyfill from 'babel-polyfill'
import { render } from 'react-dom'

import 'tailwindcss/dist/tailwind.min.css'
import Root from './components/Root'
import './styles/base.css'

render(
  <div>
    <Root />
  </div>,
  document.getElementById('root')
)
