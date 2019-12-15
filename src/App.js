import React from 'react'

import { Button, Title } from './library'

const App = () => (
  <div className="App">
    <div className="wrapper">
      <Title  headingLevel={ 1 }
              headingText="Welcome"
              underlineColor="main"
              additionalClasses={[
                'font-weight--normal',
                'color--dark']}
      />
      <Button buttonText="Find out more" buttonColor="main" />
    </div>
  </div>
)

export default App
