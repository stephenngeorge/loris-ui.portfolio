import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ImageLoader, MainNav } from './library'
import { ImageLoaderData, MainNavData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <MainNav { ...MainNavData } />
      <ImageLoader { ...ImageLoaderData } />
      <div style={ {height: "200vh"} }></div>
    </div>
  </Router>
)

export default App
