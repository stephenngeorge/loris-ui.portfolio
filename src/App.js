import React from 'react'

import { ButtonRow, Title } from './library'

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
      <ButtonRow 
        rowColor="main"
        buttons={[
          {
            buttonText: "Get in touch",
            additionalClasses: ['color--light']
          },
          {
            buttonText: "Upcoming events",
            buttonOutline: true
          }
        ]}
      />
    </div>
  </div>
)

export default App
