import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { HeroGallery, MainNav } from './library'
import { HeroGalleryData, MainNavData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <MainNav { ...MainNavData } />
      <HeroGallery { ...HeroGalleryData } />
    </div>
  </Router>
)

export default App
