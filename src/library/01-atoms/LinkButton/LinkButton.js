/**
 * ----------
 * BUTTON
 * ----------
 * 
 * Buttons components render a button as either a
 * button or anchor tag. If the button is a link,
 * then the buttonLinkVariation determines if the
 * button will be rendered as an <a> or a <Link>
 */

import React, { useContext } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import * as errorTypes from '../../errorTypes'

import { ThemeContext } from "../../00-protons/Themer/Themer"

const Button = ({
  additionalClasses,
  buttonBlock,
  buttonBorderColor,
  buttonBgColor,
  buttonColor,
  buttonLarge,
  buttonLink,
  buttonLinkVariation,
  buttonOutline,
  buttonText,
  scopedStyles
}) => {
  // consume theme and set styles
  const { borders, colors, fonts } = useContext(ThemeContext)
  const buttonStyles = {
    backgroundColor: buttonOutline ? "transparent" : colors[buttonBgColor],
    border: `.125rem solid ${colors[buttonBorderColor]}`,
    borderRadius: borders.radius.default,
    color: buttonOutline ? colors[buttonBgColor] : colors[buttonColor],
    fontFamily: fonts.families.serif,
    fontSize: buttonLarge ? fonts.sizes.default : fonts.sizes.lead,
    transition: "background-color .3s ease, color .3s ease",
    ...scopedStyles
  }

  // validate buttonText (check it's not empty)
  const isValidButton = buttonText => {
    let errors = []

    if (buttonText.length <= 0) {
      errors.push({
        type: errorTypes.VALUE_EMPTY_OR_NULL,
        source: "Button > props.buttonText",
        message: "buttonText is empty, you must a string of length >= 1"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }
    
    return errors
  }
  
  // set classes
  const classes = [
    "link-button",
    buttonLarge ? 'button--large' : '',
    buttonBlock ? 'button--block' : '',
    ...additionalClasses
  ]
  // render button if there are no errors
  return isValidButton(buttonText).length > 0 ? null :
    buttonLinkVariation === "internal" ? (
    <Link to={ buttonLink } style={ buttonStyles } className={`${classes.join(" ")}`}>
      { buttonText }
    </Link>
  ) : (
    <a href={ buttonLink } style={ buttonStyles } className={`${classes.join(" ")}`}>
      { buttonText }
    </a>
  )
}

Button.propTypes = {
  additionalClasses: PropTypes.array,
  buttonBlock: PropTypes.bool,
  buttonBorderColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  buttonLarge: PropTypes.bool,
  buttonLink: PropTypes.string,
  buttonLinkVariation: PropTypes.string,
  buttonOutline: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  scopedStyles: PropTypes.object
}

Button.defaultProps = {
  additionalClasses: [],
  buttonBlock: false,
  buttonBorderColor: 'main',
  buttonBgColor: 'main',
  buttonLarge: false,
  buttonLink: "https://google.co.uk",
  buttonLinkVariation: 'internal',
  buttonOutline: false,
  buttonText: 'Click here',
  buttonType: 'button',
  scopedStyles: {}
}

export default Button
