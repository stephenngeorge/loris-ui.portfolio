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

import React from "react"
import PropTypes from "prop-types"

const Button = ({
  additionalClasses,
  buttonBlock,
  buttonBorderColor,
  buttonColor,
  buttonLarge,
  buttonLinkVariation,
  buttonOutline,
  buttonText,
  buttonType
}) => {
  /**
   * ----------
   * VALIDATE PROPS INPUTS
   * ----------
   */  
  const isValidButton = (buttonColor, buttonText, buttonType) => {
    let errors = []
    
    if (['main', 'complementary', 'secondary', 'dark', 'light'].indexOf(buttonBorderColor.toLowerCase()) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Button > props.buttonBorderColor",
        message: "buttonBorderColor is out of range, must be one of 'main' | 'complementary' | 'secondary' | 'dark' | 'light'. These correspond to sass variables"
      })
    }

    if (['main', 'complementary', 'secondary', 'dark', 'light'].indexOf(buttonColor.toLowerCase()) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Button > props.buttonColor",
        message: "buttonColor is out of range, must be one of 'main' | 'complementary' | 'secondary' | 'dark' | 'light'. These correspond to sass variables"
      })
    }

    if (buttonText.length <= 0) {
      errors.push({
        type:  "EMPTY OR NULL VALUE",
        source: "Button > props.buttonText",
        message: "buttonText is empty, you must a string of length >= 1"
      })
    }
    
    if (['a', 'button'].indexOf(buttonType.toLowerCase()) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Button > props.buttonType",
        message: "buttonType is out of range, must be one of 'a' | 'button'"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }
    
    return errors
  }
  
  const classes = [
    "button",
    `bg--${buttonColor}`,
    `button-border--${buttonBorderColor}`,
    buttonLarge ? 'button--large' : '',
    buttonBlock ? 'button--block' : '',
    buttonOutline ? `button--outline` : '',
    buttonOutline ? `button-border--${buttonColor}` : '',
    buttonOutline ? `color--${buttonColor}` : '',
    ...additionalClasses
  ]
  
  let ButtonTag = buttonType !== "a" ? buttonType :
                  buttonLinkVariation === "internal" ? "Link" : "a"
  
  return isValidButton(buttonColor, buttonText, buttonType).length > 0 ? null : (
    <ButtonTag className={`${classes.join(" ")}`}>
      { buttonText }
    </ButtonTag>
  )
}

Button.propTypes = {
  additionalClasses: PropTypes.array,
  buttonBlock: PropTypes.bool,
  buttonBorderColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonLarge: PropTypes.bool,
  buttonLinkVariation: PropTypes.string,
  buttonOutline: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
}

Button.defaultProps = {
  additionalClasses: [],
  buttonBlock: false,
  buttonBorderColor: 'main',
  buttonColor: 'main',
  buttonLarge: false,
  buttonLinkVariation: 'internal',
  buttonOutline: false,
  buttonText: 'Click here',
  buttonType: 'button'
}

export default Button
