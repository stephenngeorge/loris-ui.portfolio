import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ButtonRow, GalleryFull, Page, PageNav } from './library'
import { ButtonRowData, GalleryFullData, PageData, PageNavData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Page additionalClasses={['site-page']} { ...PageData }>
        <PageNav { ...PageNavData } />
        <GalleryFull { ...GalleryFullData }>
          <ButtonRow { ...ButtonRowData } />
        </GalleryFull>
      </Page>
    </div>
  </Router>
)

export default App
