/**
 * ----------
 * RICH TEXT
 * ----------
 * 
 * Rich Text components are simply a wrapper for
 * other DOM elements. This allows rendering of
 * any other markup (anchor tags for example) with
 * consistent/controlled styling
 */

import React from "react"
import PropTypes from "prop-types"

const RichText = ({
  additionalClasses,
  children
}) => {
  const classes = ["rich-text", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      {children}
    </div>
  )
}

RichText.propTypes = {
  additionalClasses: PropTypes.array
}

RichText.defaultProps = {
  additionalClasses: []
}

export default RichText
