import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Footer, GalleryFull, ButtonRow } from './library'
import { FooterData, GalleryFullData, ButtonRowData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <GalleryFull { ...GalleryFullData }>
        <ButtonRow { ...ButtonRowData } />
      </GalleryFull>
      <Footer { ...FooterData } />
    </div>
  </Router>
)

export default App
