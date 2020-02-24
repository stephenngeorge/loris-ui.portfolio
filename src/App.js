import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { IconsList } from './library'
import { IconsListData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <IconsList { ...IconsListData } />
    </div>
  </Router>
)

export default App
