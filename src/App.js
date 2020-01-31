import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ImageLoader } from './library'
import { ImageLoaderData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <ImageLoader { ...ImageLoaderData } />
    </div>
  </Router>
)

export default App
