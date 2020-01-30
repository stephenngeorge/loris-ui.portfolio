/**
 * ----------
 * IMAGELOADER
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const ImageLoader = ({
  additionalClasses
}) => {
  const classes = ["image-loader", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

ImageLoader.propTypes = {
  additionalClasses: PropTypes.array
}

ImageLoader.defaultProps = {
  additionalClasses: []
}

export default ImageLoader
