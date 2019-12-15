import React from 'react'

import { ButtonRow, Title } from './library'

const App = () => (
  <div className="App">
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
)

export default App
