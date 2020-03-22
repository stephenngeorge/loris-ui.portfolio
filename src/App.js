import React from 'react'
import { Page, PageNav } from './library'
import { PageData, PageNavData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
      <PageNav { ...PageNavData } />
    </Page>
  </div>
)

export default App
