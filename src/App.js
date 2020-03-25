import React from 'react'
import { Page } from './library'
import { PageData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
    </Page>
  </div>
)

export default App
