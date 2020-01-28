/**
 * ----------
 * COVERIMAGE
 * ----------
 * 
 * Cover Image components display an img inside of a
 * container. These components use object-fit: cover to
 * ensure the container div is always filled.
 * @requires object-fit-polyfill
 * 
 */

import React from "react"
import PropTypes from "prop-types"

import * as errorTypes from '../../errorTypes'

const CoverImage = ({
  additionalClasses,
  coverImageId,
  imageAlt,
  imagePos,
  imageSize,
  imageSrc,
  scopedStyles
}) => {
  const styles = {
    width: imageSize.width,
    height: imageSize.height,
    ...scopedStyles
  }
  const imageStyles = {
    objectPosition: `${imagePos.x} ${imagePos.y}`
  }

  const validateImage = (imagePos, imageSrc) => {
    let errors = []

    let imagePosKeys = Object.keys(imagePos)
    if (imagePosKeys.indexOf("x") < 0 || imagePosKeys.indexOf("y") < 0) {
      errors.push({
        type: errorTypes.OBJECT_MALFORMED,
        source: "CoverImage > props.imagePos",
        message: "imagePos prop must be an object containing keys 'x' and 'y'"
      })
    }

    let imageSizeKeys = Object.keys(imageSize)
    if (imageSizeKeys.indexOf("width") < 0 || imageSizeKeys.indexOf("height") < 0) {
      errors.push({
        type: errorTypes.OBJECT_MALFORMED,
        source: "CoverImage > props.imageSize",
        message: "imageSize props must be an object containing 'width' and 'height'"
      })
    }
  
    let filepath = imageSrc.split('.')
    if (["jpg", "jpeg", "png"].indexOf(filepath[filepath.length - 1]) < 0) {
      errors.push({
        type: errorTypes.UNALLOWED_FILE_TYPE,
        source: "CoverImage > props.imageSrc",
        message: "The image must be a '.jpg', '.jpeg' or '.png'. If you want to render an SVG, use the Icon component instead"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }
    return errors
  }

  const classes = ["cover-image", ...additionalClasses]
  return validateImage(imagePos, imageSrc).length > 0 ? null : (
    <div style={ styles } className={`${classes.join(" ")}`} id={ coverImageId }>
      <img  data-object-fit="cover"
            alt={ imageAlt }
            src={ imageSrc }
            style={ imageStyles }
      />
    </div>
  )
}

CoverImage.propTypes = {
  additionalClasses: PropTypes.array,
  coverImageId: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePos: PropTypes.object, // <-- object with keys "x" and "y"
  imageSize: PropTypes.object, // <-- object with keys "width" and "height"
  imageSrc: PropTypes.string, // <-- file path to a .jpg, .png, .svg...
  scopedStyles: PropTypes.object
}

CoverImage.defaultProps = {
  additionalClasses: [],
  imageAlt: "loris-ui.portfolio image",
  imagePos: { x: "50%", y: "50%" },
  imageSize: { width: "24rem", height: "16rem" },
  scopedStyles: {}
}

export default CoverImage