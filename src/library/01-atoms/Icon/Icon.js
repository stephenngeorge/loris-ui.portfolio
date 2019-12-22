/**
 * ----------
 * ICON
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Icon = ({
  additionalClasses,
  icon,
  size
}) => {
  const validateIcon = size => {
    let errors = []

    if (["xs", "sm", "md", "lg", "xl"].indexOf(size) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Icon > props.size",
        message: "Size must be one of 'xs' | 'sm' | 'md' | 'lg' | 'xl'"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  const classes = [
    "icon",
    `icon--${size}`,
    ...additionalClasses
  ]
  return validateIcon(size).length > 0 ? null : (
    <div className={`${classes.join(" ")}`}>
      <img src={ icon.src } alt={ icon.name } />
    </div>
  )
}

Icon.propTypes = {
  additionalClasses: PropTypes.array,
  icon: PropTypes.object,
  size: PropTypes.string
}

Icon.defaultProps = {
  additionalClasses: [],
  size: "sm"
}

export default Icon
