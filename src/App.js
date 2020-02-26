import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SideNav } from './library'
import { SideNavData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <SideNav { ...SideNavData } />
    </div>
  </Router>
)

export default App
