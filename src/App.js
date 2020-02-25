import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { MainNav } from './library'
import { MainNavData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <MainNav { ...MainNavData } />
    </div>
  </Router>
)

export default App
