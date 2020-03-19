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
  // override the image id and append --focus,
  // this ensures the image Id is different to the
  // thumbnail image id in the image scroller.
  const imageProps = {
    ...images[focusImage],
    imageId: `${images[focusImage].imageId}--focus`
  }
  return (
    <div className={`${classes.join(" ")}`}>
      <CoverImage
        { ...imageProps }
        imageSize={ {width: "auto", height: "auto"} }
        objectFit="contain"
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
