import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ButtonRow, Page, HeroGallery, TextSection, IconsList, StaticGallery } from './library'
import { ButtonRowData, PageData, HeroGalleryData, TextSectionData, IconsListData, StaticGalleryData } from './library/data'

const App = () => (
  <Router>
    <div className="App">
      <Page additionalClasses={['home-page']} { ...PageData }>
        <HeroGallery { ...HeroGalleryData } />
        <TextSection additionalClasses={['text-container--very-narrow']} { ...TextSectionData }>
          <p>
            Having taken early retirement in 2017, I now concentrate on photography 
            (alongside my other main interest: reading) with a particular interest 
            in UK wildlife and nature. My ambition is always to create pictures with 
            an element of the “artistic” but captured without any staging. None of my 
            pictures are set up or taken in a studio: they are all images captured 
            whilst outside exploring the British countryside. I look for ways to make 
            these pictures more than simple record shots and ideally I want to create 
            images that people would be keen to hang on their walls. I use a Canon 7D 
            MkII with Sigma 150-600mm S, Sigma 70-200mm and Canon 17-55mm lenses. Images 
            are post-processed in Lightroom. You can also find me on <a href="https://www.facebook.com/NeilGeorgePhotography/">Facebook 
            (@NeilGeorgePhotography)</a> and <a href="https://twitter.com/NeilG199">Twitter (@NeilG199)</a>, although my Twitter 
            feed mixes both photography and book reviews.
          </p>
          <IconsList additionalClasses={['icons-list--side-bar']} { ...IconsListData } />
        </TextSection>
        <ButtonRow { ...ButtonRowData } />
        <StaticGallery { ...StaticGalleryData } />
      </Page>
    </div>
  </Router>
)

export default App
