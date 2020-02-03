/**
 * ----------
 * HEROGALLERY
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const HeroGallery = ({
  additionalClasses
}) => {
  const classes = ["hero-gallery", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

HeroGallery.propTypes = {
  additionalClasses: PropTypes.array
}

HeroGallery.defaultProps = {
  additionalClasses: []
}

export default HeroGallery
