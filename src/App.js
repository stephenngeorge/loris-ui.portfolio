import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { LinkButton } from './library'
import { LinkButtonData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <LinkButton { ...LinkButtonData } />
    </div>
  </Router>
)

export default App
