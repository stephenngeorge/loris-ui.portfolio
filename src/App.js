import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GalleryFull } from './library'
import { GalleryFullData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <GalleryFull { ...GalleryFullData } />
    </div>
  </Router>
)

export default App
