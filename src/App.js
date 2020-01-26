import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Heading } from './library'
import { HeadingData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Heading { ...HeadingData }>
        <h2>Title</h2>
      </Heading>
    </div>
  </Router>
)

export default App
