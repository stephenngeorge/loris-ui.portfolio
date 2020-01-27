import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ButtonRow } from './library'
import { ButtonRowData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <ButtonRow { ...ButtonRowData } />
    </div>
  </Router>
)

export default App
