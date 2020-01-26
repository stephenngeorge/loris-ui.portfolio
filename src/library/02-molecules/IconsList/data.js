// this is a basic data file for housing all the props data
// that you will pass into this component. By default, loris has
// setup a "data" object for you. You should import it in the file 
// where you consume this component and then pass it to the relevant 
// component like this: {...data}
//
// you can also add and export as many other objects from this file
// as you like, this is a pattern we encourage. So if you had an instance
// of this component on the homepage, setup and export a "homepage" object
// and then an "aboutpage" object etc (or use whatever naming convention
// you like!)

import { facebook_logo, sent_mail, twitter_logo } from '../../demo/assets'

const data = {
  // add props here that your component will expect in the format:
  // PropName: prop value
  icons: [
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
  ]
}

export {
  data
}