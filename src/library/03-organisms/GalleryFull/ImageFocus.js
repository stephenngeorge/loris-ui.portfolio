/**
 * ----------
 * IMAGEFOCUS
 * ----------
 * 
 * Image Focus components are used to display a single, large image
 * as selected from the ImageScroller component.
 * 
 * @see './GalleryFull.js'
 * 
 * Image Focus components accept an array of images, in which
 * each object should be of shape:
 * 
 * {
 * ..imageAlt: string,
 * ..imageId: string,
 * ..imageName: string,
 * ..imageSrc: string (filepath)
 * }
 * 
 */

import React from "react"
import PropTypes from "prop-types"

import { CoverImage } from '../../01-atoms'

const ImageFocus = ({
  additionalClasses,
  focusImage,
  images
}) => {
  const classes = ["image-focus", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <CoverImage
        { ...images[focusImage] }
        imageSize={ {width: "100%", height: "auto"} }
      />
    </div>
  )
}

ImageFocus.propTypes = {
  additionalClasses: PropTypes.array,
  focusImage: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired
}

ImageFocus.defaultProps = {
  additionalClasses: []
}

export default ImageFocus
