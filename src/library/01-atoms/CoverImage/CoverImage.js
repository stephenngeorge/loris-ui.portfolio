/**
 * ----------
 * COVERIMAGE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const CoverImage = ({
  additionalClasses
}) => {
  const classes = ["cover-image", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

CoverImage.propTypes = {
  additionalClasses: PropTypes.array
}

CoverImage.defaultProps = {
  additionalClasses: []
}

export default CoverImage
