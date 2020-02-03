import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { HeroGallery } from './library'
import { HeroGalleryData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <HeroGallery { ...HeroGalleryData } />
    </div>
  </Router>
)

export default App
