/**
 * ----------
 * SPINNER
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Spinner = ({
  additionalClasses
}) => {
  const classes = ["spinner", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

Spinner.propTypes = {
  additionalClasses: PropTypes.array
}

Spinner.defaultProps = {
  additionalClasses: []
}

export default Spinner
