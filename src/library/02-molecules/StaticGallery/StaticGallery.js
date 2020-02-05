/**
 * ----------
 * STATICGALLERY
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const StaticGallery = ({
  additionalClasses
}) => {
  const classes = ["static-gallery", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

StaticGallery.propTypes = {
  additionalClasses: PropTypes.array
}

StaticGallery.defaultProps = {
  additionalClasses: []
}

export default StaticGallery
