import React from 'react'

import { IconsList } from './library'
import { facebook_logo, sent_mail, twitter_logo } from './library/demo/assets'

const App = () => (
  <div className="App">
    <IconsList icons={[
      {
        name: 'facebook',
        link: 'https://www.facebook.com',
        src: facebook_logo
      },
      {
        name: 'twitter',
        link: 'https://twitter.com',
        src: twitter_logo
      },
      {
        name: 'email',
        link: 'https://google.co.uk',
        src: sent_mail
      }
    ]} />
  </div>
)

export default App
