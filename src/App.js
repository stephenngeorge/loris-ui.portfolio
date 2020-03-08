import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Card, CardBlock, Page } from './library'
import { CardData, CardBlockData, PageData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Page { ...PageData }>
        <CardBlock { ...CardBlockData }>
          <Card { ...CardData }>
            <p>some text some text some text some text some text</p>
          </Card>
          <Card { ...CardData }>
            <p>some text some text some text some text some text</p>
          </Card>
          <Card { ...CardData }>
            <p>some text some text some text some text some text</p>
          </Card>
          <Card { ...CardData }>
            <p>some text some text some text some text some text</p>
          </Card>
          <Card { ...CardData }>
            <p>some text some text some text some text some text</p>
          </Card>
        </CardBlock>
      </Page>
    </div>
  </Router>
)

export default App
