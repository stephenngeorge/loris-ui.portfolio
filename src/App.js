import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Page, ButtonRow } from './library'
import { PageData, ButtonRowData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Page { ...PageData }>
        <ButtonRow { ...ButtonRowData } />
      </Page>
    </div>
  </Router>
)

export default App
