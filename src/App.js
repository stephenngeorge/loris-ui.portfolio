import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { HeroGallery, Page } from './library'
import { HeroGalleryData, PageData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Page { ...PageData }>
        <HeroGallery { ...HeroGalleryData } />
      </Page>
    </div>
  </Router>
)

export default App
