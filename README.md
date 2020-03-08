# LORIS UI - PORTFOLIO

This is the first in a series of react component libraries.
The "portfolio" library has been designed initially with the
neilgeorgephotography project in mind, to showcase beautiful
photography, but could work equally well for other sites of a
similar type.

As with all Loris component libraries, the components are themable.
To achieve this, you musts wrap your route component (or wherever you
intend to be using the components) in a Loris `Themer` component, which
the library exports. The component accepts a `theme` prop, which is an
object, to which you can pass all of your custom values. To see exactly
how your custom theme object should be structured, take a look at the
`/src/library/00-protons/Themer/defaultTheme.js` file. Write your own
values at any key name/location that you see in this object to overwrite
what's in the default. For example, with a typical implementation, your
index.js file might look something like this:

```
// index.js

import React from 'react'
import { render } from 'react-dom'
import './index.scss'

import App from './App'
import { Themer } from './library'

import * as serviceWorker from './serviceWorker'

render(
  <Themer theme={{
    colors: {
      main: "#6CA4C8",
      secondary: "#B88A9F",
      secondary_light: "rgba(184, 138, 159, .12)",
      dark: "#121F1F",
      grey: "#F9F8F7",
      light: "#FFFFFF"
    }
  }}>
    <App />
  </Themer>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

Of course, if your custom theme was starting to get long, you could break
it out into its own file and import it here instead, as long as the object
gets passed to the theme prop, you're all good.

For more granular control, you can pass a `scopedStyles` prop to any loris
component. So if a component had been setup to use `backgroundColor: colors.main`,
even though you've set your own "main" colour, you might want that component to
use your secondary color for its background. It would look something like this:

```
// the below code assumes that you are consuming the
// theme context earlier in this same file and assigning
// it to the variable `theme`

<Card scopedStyles={
  backgroundColor: theme.colors.secondary
} />
```

## Components
Below are all the components in this library, including a brief
description and a list of props that can be passed

### 01-atoms/CoverImage
Renders an image that fills its container using object-fit.
The object-fit-polyfill library is a dependency of this
library for use in this component.

**Props:**
- coverImageId [String]: a unique id for the component,
- imageAlt [String]: the text for the image HTML alt attribute,
- imageId [String]: a unique id for the image,
- imagePlaceholderSrc [String]: filepath to the placeholder image that will be displayed until the image loads,
- imagePos [Object]: keys `x` and `y` to be used as the object-position value,
- imageSize [Object]: keys `width` and `height` to be used to sest the dimensions of the image,
- imageSrc [String]: filepath to the image to be rendered


### 01-atoms/Heading
Displays a simple text heading with some pre-defined styles.

**Props:**
- color [String]: one of the theme colors, sets the color of the heading text,
- headingLevel [Number]: between 1 - 6 inclusive, sets the <h_> tag for the heading,
- headingText [String]: the text to be rendered for the heading


### 01-atoms/Icon
Displays an svg graphic. Can optionally be a link.

**Props:**
- name [String]: the name of the svg, used as the img alt text
- size [String]: a predefined size string, sets the size of the svg,
- src [String]: a filepath that points to an svg file,
- url [String]: path to an internal or external resource. If supplied, the svg is wrapped in an anchor tag


### 01-atoms/ImageLoader
Similar to CoverImage but with the difference that this image will retain
its aspect ratio. No object-fit properties are used, so the image will 
simply render at the specified size and is not guarunteed to fill its container.

**Props:**
- imageAlt [String]: text to be used as the value for the image alt attribute,
- imageId [String]: a unique for the image,
- imageSrc [String]: a filepath to the image,
- placeholderImageSrc [String]: a file path to the placeholder image that will be displayed until the intended image has loaded


### 01-atoms/LinkButton
A text link to an internal or external resource. It is styled to look like
a button component.

**Props:**
- buttonBlock [Boolean]: determines whether or not the button should fill its container's width,
- buttonBorderColor [String]: sets the color of the border,
- buttonBgColor [String]: sets the color of the background, this should typically be the same as the border color,
- buttonColor [String]: sets the color of the button's text content,
- buttonLarge [Boolean]: determines which size variation of the button should be used,
- buttonLink [String]: a url that the button redirects to,
- buttonLinkVariation [String]: either `internal` or `external`, determines if an <a> or <Link> tag is used,
- buttonOutline [Boolean]: determines whether or not the button should have a color fill,
- buttonText [String]: the text contents of the button


### 01-atoms/RichText
A simple container component that renders children with some defined styles.


### 01-atoms/Title
A text component for rendering a heading with a stylised underline.

**Props:**
- titleLevel [Number]: between 1 - 6 inclusive, determines the <h_> tag that is to be used,
- titleText [String]: the text that is to be displayed,
- underlineColor [String]: a theme color name that the title underline should use


### 02-molecules/ButtonRow
A component for rendering multiple buttons. The buttons are displayed side by side
with a central line that runs across the screen and connects the buttons together.
This line also helps differentiate between different sections of a page.

**Props:**
- buttons [Array]: each array item should be an object containing the non-color related props of a button,
- rowColor [String]: a theme color name that will be used to style the connecting line, and the buttons thereon,
- rowWidth [String]: either `narrow` or `very-narrow`, determines how wide the buttons container should be


### 02-molecules/Card
A flexible component that renders a heading, sub-heading and then any other children
that are set.

**Props:**
- backgroundColor [String]: a theme color name that determines the background color of the button,
- borderColor [String]: a theme color name that determines sthe border color, should normally be the same as the background color,
- cardHeading [String]: the text for the main card heading,
- cardSubHeading [String]: the text for the card subheading


### 02-molecules/Footer
A simple container for some typically footer content: an accreditation for the site builder,
a simple site map and a list of social media icons

**Props:**
- accreditationLink [String]: url relevant to the accreditation text,
- accreditationText [String]: text to be displayed, could be an affiliated organisation or the developer etc,
- iconsListData [Array]: each item should be an object with all of the props for an Icon component (see 01-atoms/Icon),
- siteMapLinks [Array]: each item should have `path` and `label` keys


### 02-molecules/HeroGallery
This is an image gallery designed for the hero section of the website.
It displays full screen images and tranistions between them with a subtle
cross-fade animation.

**Props:**
- gallerySize [Object]: keys `width` and `height`, default to `100%` and `100vh` respectively,
- images [Array]: each object in the array should contain the props for an individual image


### 02-molecules/IconsList
Displays multiple svg icons. Can be configured as a row or column.

**Props:**
- direction [String]: one of `column`, `row`, `column-reverse` or  `row-reverse`, determines the arrangement of the icons
- icons [Array]: each object in the array should contain the props for an Icon component


### 02-molecules/MainNav
The top bar that sits on every page of the website, including the main menu.

**Props:**
- menuLinks [Array]: each object in the array should have keys `path` and `label`,
- siteLogo [String]: optional filepath to a logo image,
- siteTitle [String]: the title of the site/web app


### 02-molecules/PageNav
A secondary level navigation for navigating within a page

**Props:**
- linkHighlight [String]: name of one of the theme colors, to style the underline of an hover/active link,
- links [Array]: each object in the array should have keys `path` and `label`


### 02-molecules/SideNav
A secondary level navigation that sits at the side of a page.

**Props:**
- direction [String]: one of `column`, `row`, `column-reverse`, `row-reverse`,
- linkColor [String]: the color that the links will display in,
- menuItems [Array]: each object in the array should have keys `path` and `label`


### 02-molecules/StaticGallery
A section for rendering a collection of images. Includes a side nav and a title.

**Props:**
- images [Array]: each object in the array should contain the props for an image,
- titleText [String]: The title for the image section,
- titleLevel [Number]: between 1 - 6 inclusive, determines the <h_> to be used for the title,
- underlineColor [String]: one of the theme color names, determines the color of the title underline


### 02-molecules/TextSection
Section for rendering a heading with text children. Some pre-defined styles
are supplied.

**Props:**
- titleLevel [Number]: between 1 - 6 inclusive, determines the level of <h_> that should render the title,
- titleText [String]: the text for the section title,
- underlineColor [String]: one of the theme color names, determines the color of the title underline.


### 03-organisms/CardBlock
Component renders a selection of cards in rows. Cards as passed as children.

**Props:**
- backgroundColor [String]: name of one of the theme colors, sets the background of the section,
- loadingImage [String]: filepath to an image to be rendered is there are no events to dispaly/events are loading,
- rowContains [Number]: between 1 - 4 inclusive, determines how many cards should fit in a row before they break onto a second line


### 03-organisms/GalleryFull
A full page gallery component. This renders a collection of images in a horizontal,
scrollable container. Clicking one of the images loads it into the large, focus-image
area below.

**Props:**
- galleryColor [String]: one of the theme color names, determines the color that will be used across various aspects of the component,
- images [Array]: each object in the array should contain the props for an image


### 03-organisms/Page
Page components wrap app content and display a consistent navigation and footer.
The props are listed below, but not detailed since they would be repeats on component detailed above.

**Props:**
- accreditationLink [String],
- accreditationText [String],
- iconsListData [Object],
- menuLinks [Array],
- siteLogo [String],
- siteMapLinks [Array],
- siteTitle [String]


Additionally, every component in the library can accept an `additionalClasses` component,
for passing down extra class names that are rendered on the component's root DOM node.