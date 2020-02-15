/**
 * ----------
 * GALLERYFULL
 * ----------
 * 
 * Gallery Full components represent a gallery of images
 * that occupy a large section of the page, and often
 * are the entire page in their own right.
 * 
 * Gallery Full consumes the ImageScroller and ImageFocus
 * components as well as exposing a flexible content area
 * where the children are rendered.
 * 
 * @requires './ImageScroller.js'
 * @requires './ImageFocus.js'
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import ImageScroller from './ImageScroller'
import ImageFocus from './ImageFocus'

const GalleryFull = ({
  additionalClasses,
  children,
  galleryColor,
  images
}) => {
  const [focusImage, setFocusImage] = useState(0);

  const classes = ["gallery-full", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      <ImageScroller images={ images } bgColor={ galleryColor } setFocusImage={ setFocusImage } />
      { children }
      <ImageFocus images={ images } focusImage={ focusImage } />
    </section>
  )
}

GalleryFull.propTypes = {
  additionalClasses: PropTypes.array,
  galleryColor: PropTypes.string,
  images: PropTypes.array.isRequired
}

GalleryFull.defaultProps = {
  additionalClasses: [],
  galleryColor: "secondary_light"
}

export default GalleryFull
