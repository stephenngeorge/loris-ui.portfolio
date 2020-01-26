import React from 'react'
import { render } from 'react-dom'
import './index.scss'

import App from './App'
import { Themer } from './library'

import * as serviceWorker from './serviceWorker'

render(
  <Themer theme={{
    colors: {
      main: "#6CA4C8"
    }
  }}>
    <App />
  </Themer>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
