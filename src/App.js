import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Title } from './library'
import { TitleData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Title {...TitleData} />
    </div>
  </Router>
)

export default App
