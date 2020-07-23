import React from 'react'
import { Page, Title, Quote } from './library'
import { PageData, TitleData, QuoteData } from './library/data'

const App = () => (
  <div className="App">
    <Page { ...PageData }>
      <Title {...TitleData} />
      <Quote {...QuoteData} />
    </Page>
  </div>
)

export default App
