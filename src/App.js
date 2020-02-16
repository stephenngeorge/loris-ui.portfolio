import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Page, GalleryFull, ButtonRow } from './library'
import { PageData, GalleryFullData, ButtonRowData } from './library/data'

const App = () => (
  <Router>
    <Page additionalClasses={['site-page']} { ...PageData }>
    <div className="App">
      <GalleryFull { ...GalleryFullData }>
        <ButtonRow { ...ButtonRowData } />
      </GalleryFull>
    </div>
    </Page>
  </Router>
)

export default App
