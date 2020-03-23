import React from 'react'
import { Page, GalleryFull } from './library'
import { PageData, GalleryFullData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
      <GalleryFull { ...GalleryFullData } />
    </Page>
  </div>
)

export default App
