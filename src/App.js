import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageNav } from './library'
import { PageNavData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <PageNav { ...PageNavData } />
    </div>
  </Router>
)

export default App
