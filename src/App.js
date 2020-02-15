import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GalleryFull, ButtonRow } from './library'
import { GalleryFullData, ButtonRowData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <GalleryFull { ...GalleryFullData }>
        <ButtonRow { ...ButtonRowData } />
      </GalleryFull>
    </div>
  </Router>
)

export default App
