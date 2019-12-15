/**
 * ----------
 * TITLE
 * ----------
 * 
 * Title components render a heading of any specified
 * level. They are rendered with an optional, coloured
 * highlight that covers half the height of the text
 */

import React from "react"
import PropTypes from "prop-types"

const Title = ({
  additionalClasses,
  headingLevel,
  headingText,
  underlineColor
}) => {
  /**
   * ----------
   * VALIDATE PROPS INPUTS
   * ----------
   */
  const isValidTitle = (headingLevel, headingText) => {
    let errors = []
    if (headingLevel < 1 || headingLevel > 6) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Title > props.headingLevel",
        message: "headingLevel is out of range, you must pass a number between 1 - 6 to this prop"
      })
    }
    if (headingText.length <= 0) {
      errors.push({
        type: "EMPTY OR NULL VALUE",
        source: "Title > props.headingText",
        message: "headingText is empty, you must a string of length >= 1"
      })
    }
    if (["main", "secondary", "complementary", "dark", "light"].indexOf(underlineColor.toLowerCase()) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Title > props.outlineColor",
        message: "Colors in Loris are opinionated, this variable must be string and must be one of 'main' | 'secondary' | 'complementary' | 'dark' | 'light'. These correspond to sass variables"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  /**
   * ----------
   * SET VARIABLES
   * ----------
   */
  const classes = [
    "title",
    `underline-color--${underlineColor}`,
    ...additionalClasses
  ]
  const HTMLTag = `h${headingLevel}`

  /**
   * ----------
   * RENDER
   * ----------
   */
  return isValidTitle(headingLevel, headingText).length > 0 ? null : (
    <HTMLTag className={`${classes.join(" ")}`}>
      { headingText }
    </HTMLTag>
  )
}

Title.propTypes = {
  additionalClasses: PropTypes.array,
  headingLevel: PropTypes.number,
  headingText: PropTypes.string.isRequired,
  underlineColor: PropTypes.string
}

Title.defaultProps = {
  additionalClasses: [],
  headingLevel: 1,
  underlineColor: "main"
}

export default Title
