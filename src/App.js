import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Card, CardBlock } from './library'
import { CardData, CardBlockData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <CardBlock { ...CardBlockData }>
        <Card { ...CardData }>
          <p>This is the card body</p>
        </Card>
        <Card { ...CardData }>
          <p>This is the card body</p>
        </Card>
        <Card { ...CardData }>
          <p>This is the card body</p>
        </Card>
      </CardBlock>
    </div>
  </Router>
)

export default App
