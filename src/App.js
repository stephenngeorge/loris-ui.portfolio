import React from 'react'
import { Page, Title } from './library'
import { PageData, TitleData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
      <Title {...TitleData} />
    </Page>
  </div>
)

export default App
