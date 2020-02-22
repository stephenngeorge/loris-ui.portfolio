import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { RichText, Title } from './library'
import { TitleData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Title { ...TitleData } />
      <RichText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum 
          nisi erat, vitae bibendum dolor sodales fringilla. Suspendisse in urna 
          sollicitudin, laoreet purus a, tempor ex. Sed porta volutpat lorem nec 
          vestibulum. In fermentum eros in lorem tincidunt fermentum. Vestibulum et 
          pretium sem. Integer ante turpis, tincidunt quis leo eget, rhoncus mattis nunc.
        </p>
      </RichText>
    </div>
  </Router>
)

export default App
