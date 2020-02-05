import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { StaticGallery } from './library'
import { StaticGalleryData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <StaticGallery { ...StaticGalleryData } />
    </div>
  </Router>
)

export default App
