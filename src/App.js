import React from 'react'
import { Page, PageNav, GalleryFull } from './library'
import { PageData, PageNavData, GalleryFullData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
      <PageNav { ...PageNavData } />
      <GalleryFull { ...GalleryFullData } />
    </Page>
  </div>
)

export default App
