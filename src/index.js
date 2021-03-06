import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import './index.scss'

import App from './App'
import { Themer } from './library'

import * as serviceWorker from './serviceWorker'

render(
  <Themer theme={{
    colors: {
      main: "#6CA4C8",
      secondary: "#B88A9F",
      secondary_light: "rgba(184, 138, 159, .12)",
      dark: "#121F1F",
      grey: "#F9F8F7",
      light: "#FFFFFF"
    }
  }}>
    <Router>
      <App />
    </Router>
  </Themer>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
