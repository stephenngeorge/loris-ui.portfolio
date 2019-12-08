import React from 'react'

import { Title } from './library'

const App = () => (
  <div className="App">
    <div className="wrapper">
      <Title headingLevel={ 2 } headingText="Welcome" underlineColor="main" additionalClasses={['font-weight--normal']} />
    </div>
  </div>
)

export default App
