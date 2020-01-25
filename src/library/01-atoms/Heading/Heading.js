/**
 * ----------
 * HEADING
 * ----------
 * 
 * Headings are simple containers for rendering
 * headings for different UI items.
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"

import { ThemeContext } from '../../00-protons/Themer/Themer'

const Heading = ({
  additionalClasses,
  children,
  color
}) => {
  const theme = useContext(ThemeContext)
  const headingStyles = {
    backgroundColor: theme.backgroundColor,
    border: `${theme.borderWidth} ${theme.borderStyle} ${theme.borderColor}`
  }

  const classes = [
    "heading",
    `color--${color}`,
    ...additionalClasses
  ]
  return (
    <div style={headingStyles} className={`${classes.join(" ")}`}>
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
