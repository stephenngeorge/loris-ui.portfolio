/**
 * ----------
 * HEADING
 * ----------
 * 
 * Headings are simple containers for rendering
 * headings for different UI items.
 */

import React from "react"
import PropTypes from "prop-types"

const Heading = ({
  additionalClasses,
  children,
  color
}) => {
  const validateHeading = (children, color) => {
    let errors = []

    if (Array.isArray(children)) {
      children.map(child => {
        if (child.type === "h1") {
          errors.push({
            type: "UNALLOWED VALUE",
            source: "Heading > props.children",
            message: "Heading component should not be used to render h1. Use Title instead"
          })
        }
        return child
      })
    }
    else {
      if (children.type === "h1") {
        errors.push({
          type: "UNALLOWED VALUE",
          source: "Heading > props.children",
          message: "Heading component should not be used to render h1. Use Title instead"
        })
      }
    }

    if (['main', 'complementary', 'secondary', 'dark', 'light'].indexOf(color) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Heading > props.color",
        message: "color must be one of 'main' | 'secondary' | 'complementary' | 'dark' | 'light'. These correspond to sass variables"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  const classes = [
    "heading",
    `color--${color}`,
    ...additionalClasses
  ]
  return validateHeading(children, color).length > 0 ? null : (
    <div className={`${classes.join(" ")}`}>
      { children }
    </div>
  )
}

Heading.propTypes = {
  additionalClasses: PropTypes.array,
  color: PropTypes.string
}

Heading.defaultProps = {
  additionalClasses: [],
  color: 'dark'
}

export default Heading
