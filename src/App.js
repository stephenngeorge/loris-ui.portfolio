import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Icon } from './library'
import { IconData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Icon {...IconData} />
    </div>
  </Router>
)

export default App
