/**
 * ----------
 * ICONSLIST
 * ----------
 * 
 * Icons List components show up icons (.svg files)
 * that are wrapped as in links.
 * Each icon in the props.icons should be an object of shape:
 * {
 * ..icon.name: String,
 * ..icon.link: String (url),
 * ..icon.src: String (file path to svg)
 * }
 */

import React from "react"
import PropTypes from "prop-types"

const IconsList = ({
  additionalClasses,
  direction,
  icons,
  size
}) => {
  
  const validateList = (direction, size) => {
    let errors = []
    
    if (["column", "row", "column-reverse", "row-reverse"].indexOf(direction) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "IconsList > props.direction",
        message: "Direction corresponds to flex direction, and should be one of 'column' | 'row' | 'column-reverse' | 'row-reverse'"
      })
    }

    if (["lg", "md", "sm", "xs"].indexOf(size) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "IconsList > props.size",
        message: "Size must be one of 'lg' | 'md' | 'sm' | 'xs'"
      })
    }
    
    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }
    
    return errors
  }
  
  const classes = [
    "icons-list",
    `icons-list--${direction}`,
    `icons--${size}`,
    ...additionalClasses
  ]
  return validateList(direction, size).length > 0 ? null : (
    <ul className={`${classes.join(" ")}`}>
      {
        icons.map(icon => (
          <li key={ icon.name }>
            <a href={ icon.link }>
              <img src={ icon.src } alt={ icon.name } />
            </a>
          </li>
        ))
      }
    </ul>
  )
}

IconsList.propTypes = {
  additionalClasses: PropTypes.array,
  direction: PropTypes.string,
  icons: PropTypes.array.isRequired,
  size: PropTypes.string
}

IconsList.defaultProps = {
  additionalClasses: [],
  direction: "column",
  size: "sm"
}

export default IconsList
