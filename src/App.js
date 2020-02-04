import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { CoverImage } from './library'
import { CoverImageData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <CoverImage { ...CoverImageData } />
    </div>
  </Router>
)

export default App
