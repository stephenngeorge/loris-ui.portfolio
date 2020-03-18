import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Page, GalleryFull } from './library'
import { PageData, GalleryFullData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Page { ...PageData }>
        <GalleryFull { ...GalleryFullData } />
      </Page>
    </div>
  </Router>
)

export default App
