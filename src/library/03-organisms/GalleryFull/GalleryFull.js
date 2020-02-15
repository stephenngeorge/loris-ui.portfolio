/**
 * ----------
 * GALLERYFULL
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const GalleryFull = ({
  additionalClasses
}) => {
  const classes = ["gallery-full", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

GalleryFull.propTypes = {
  additionalClasses: PropTypes.array
}

GalleryFull.defaultProps = {
  additionalClasses: []
}

export default GalleryFull
