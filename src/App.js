import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Card } from './library'
import { CardData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Card { ...CardData }>
        <p>This is the body of the card</p>
      </Card>
    </div>
  </Router>
)

export default App
