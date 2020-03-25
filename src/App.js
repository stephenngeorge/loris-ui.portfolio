import React from 'react'
import { Page, HeroGallery } from './library'
import { PageData, HeroGalleryData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
      <HeroGallery { ...HeroGalleryData } />
    </Page>
  </div>
)

export default App
