import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

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
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as errorTypes from '../../errorTypes';
import { ThemeContext } from "../../00-protons/Themer/Themer";

var LinkButton = function LinkButton(_ref) {
  var additionalClasses = _ref.additionalClasses,
      buttonBlock = _ref.buttonBlock,
      buttonBorderColor = _ref.buttonBorderColor,
      buttonBgColor = _ref.buttonBgColor,
      buttonColor = _ref.buttonColor,
      buttonLarge = _ref.buttonLarge,
      buttonLink = _ref.buttonLink,
      buttonLinkVariation = _ref.buttonLinkVariation,
      buttonOutline = _ref.buttonOutline,
      buttonText = _ref.buttonText,
      scopedStyles = _ref.scopedStyles;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      borderRadius = _useContext.borderRadius,
      colors = _useContext.colors,
      fontFamilies = _useContext.fontFamilies,
      fontSizes = _useContext.fontSizes;

  var buttonStyles = _objectSpread({
    backgroundColor: buttonOutline ? "#fff" : colors[buttonBgColor],
    border: ".125rem solid ".concat(colors[buttonBorderColor]),
    borderRadius: borderRadius.default,
    color: buttonOutline ? colors[buttonBgColor] : colors[buttonColor],
    fontFamily: fontFamilies.serif,
    fontSize: buttonLarge ? fontSizes.lead : fontSizes.default,
    transition: "background-color .3s ease, color .3s ease, filter .3s ease"
  }, scopedStyles); // programtically handle hover styles


  var hoverStyles = function hoverStyles(e) {
    switch (e.type) {
      case "mouseleave":
        if (buttonOutline) {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.color = colors[buttonBgColor];
        } else e.target.style.filter = "saturate(100%)";

        break;

      case "mouseenter":
      default:
        if (buttonOutline) {
          e.target.style.backgroundColor = colors[buttonBgColor];
          e.target.style.color = colors[buttonColor];
        } else e.target.style.filter = "saturate(60%)";

    }
  }; // validate buttonText (check it's not empty)


  var isValidButton = function isValidButton(buttonText) {
    var errors = [];

    if (buttonText.length <= 0) {
      errors.push({
        type: errorTypes.VALUE_EMPTY_OR_NULL,
        source: "Button > props.buttonText",
        message: "buttonText is empty, you must a string of length >= 1"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  }; // set classes


  var classes = ["link-button", buttonLarge ? 'button--large' : '', buttonBlock ? 'button--block' : ''].concat(_toConsumableArray(additionalClasses)); // render button if there are no errors

  return isValidButton(buttonText).length > 0 ? null : buttonLinkVariation === "internal" ? React.createElement(Link, {
    onMouseEnter: hoverStyles,
    onMouseLeave: hoverStyles,
    to: buttonLink,
    style: buttonStyles,
    className: "".concat(classes.join(" "))
  }, buttonText) : React.createElement("a", {
    onMouseEnter: hoverStyles,
    onMouseLeave: hoverStyles,
    href: buttonLink,
    style: buttonStyles,
    className: "".concat(classes.join(" "))
  }, buttonText);
};

LinkButton.defaultProps = {
  additionalClasses: [],
  buttonBlock: false,
  buttonBorderColor: 'main',
  buttonBgColor: 'main',
  buttonColor: 'light',
  buttonLarge: false,
  buttonLink: "https://google.co.uk",
  buttonLinkVariation: 'internal',
  buttonOutline: false,
  buttonText: 'Click here',
  buttonType: 'button',
  scopedStyles: {}
};
export default LinkButton;