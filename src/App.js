import React from 'react'

import { RichText, Title } from './library'

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
      <RichText>
        <p className="text--lead">
          Having taken early retirement in 2017, I now concentrate on photography 
          (alongside my other main interest: reading) with a particular interest 
          in UK wildlife and nature. My ambition is always to create pictures with 
          an element of the “artistic” but captured without any staging. None of 
          my pictures are set up or taken in a studio: they are all images captured 
          whilst outside exploring the British countryside. I look for ways to make 
          these pictures more than simple record shots and ideally I want to create 
          images that people would be keen to hang on their walls. I use a Canon 7D 
          MkII with Sigma 150-600mm S, Sigma 70-200mm and Canon 17-55mm lenses. 
          Images are post-processed in Lightroom. You can also find me on 
          <a href="#">Facebook (@NeilGeorgePhotography)</a>and 
          <a href="#">Twitter (@NeilG199)</a>, although my Twitter 
          feed mixes both photography and book reviews.
        </p>
      </RichText>
    </div>
  </div>
)

export default App
