import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Heading } from './library'

const App = () => (
  <Router>
    <div className="App">
      <Heading color="main">
        <h2>Title</h2>
      </Heading>
    </div>
  </Router>
)

export default App
