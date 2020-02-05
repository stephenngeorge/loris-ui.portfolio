/**
 * ----------
 * STATICGALLERY
 * ----------
 * 
 * Static Gallery components render a collection of images under
 * a common title/category.
 * Static Gallery accepts an images prop, which is an array of 
 * objects in which each image object should be of shape:
 * 
 * {
 * ..imageAlt: string,
 * ..imageId: string,
 * ..imagePlaceholderSrc: string, (filepath)
 * ..imageSrc: string, (filepath)
 * }
 * 
 */

import React from "react"
import PropTypes from "prop-types"

import { ImageLoader, Title } from '../../01-atoms'
import { SideNav } from '../../02-molecules'

const StaticGallery = ({
  additionalClasses,
  images,
  titleText,
  titleLevel,
  underlineColor
}) => {
  const classes = ["static-gallery", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      <SideNav
        direction="column"
        linkColor="secondary"
        menuItems={[
          {
            label: 'Animals',
            link: '/galleries/animals'
          },
          {
            label: 'Birds',
            link: '/galleries/birds'
          },
          {
            label: 'Insects',
            link: '/galleries/insects'
          },
          {
            label: 'Land and Sea',
            link: '/galleries/land-and-sea'
          },
          {
            label: 'Plants',
            link: '/galleries/plants'
          },
          {
            label: 'Urban and Abstract',
            link: '/galleries/urban-and-abstract'
          }
        ]}
      />
      <div className="static-gallery__gallery-content">
        <Title
          titleLevel={ titleLevel }
          titleText={ titleText }
          underlineColor={ underlineColor }
        />
        <div className="static-gallery__images">
          {
            images.map(image => <ImageLoader key={ image.imageId } { ...image } />)
          }
        </div>
      </div>
    </section>
  )
}

StaticGallery.propTypes = {
  additionalClasses: PropTypes.array,
  images: PropTypes.array.isRequired,
  titleText: PropTypes.string.isRequired,
  titleLevel: PropTypes.number,
  underlineColor: PropTypes.string
}

StaticGallery.defaultProps = {
  additionalClasses: [],
  titleLevel: 2,
  underlineColor: "main"
}

export default StaticGallery
