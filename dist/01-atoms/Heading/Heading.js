import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * HEADING
 * ----------
 * 
 * Headings are simple containers for rendering
 * headings for different UI items. Cannot render any
 * "h" tag with text content.
 */
import React, { useContext } from "react";
import * as errorTypes from "../../errorTypes";
import { ThemeContext } from '../../00-protons/Themer/Themer';

var Heading = function Heading(_ref) {
  var additionalClasses = _ref.additionalClasses,
      color = _ref.color,
      headingLevel = _ref.headingLevel,
      headingText = _ref.headingText,
      scopedStyles = _ref.scopedStyles;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors,
      fontFamilies = _useContext.fontFamilies,
      fontWeights = _useContext.fontWeights;

  var headingStyles = _objectSpread({
    color: colors[color],
    fontFamily: fontFamilies.serif,
    fontWeight: fontWeights.heavy
  }, scopedStyles); // validate props, checks for a headingLevel between
  // 1 - 6 and that headingText is not an empty string.


  var validateHeading = function validateHeading(headingLevel, headingText) {
    var errors = [];

    if (headingLevel < 1 || headingLevel > 6) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "Heading > props.headingLevel",
        message: "The 'headingLevel' prop must be a number between 1 - 6"
      });
    }

    if (headingText.length < 1) {
      errors.push({
        type: errorTypes.VALUE_EMPTY_OR_NULL,
        source: "Heading > props.headingText",
        message: "The 'headingText' prop cannot be an empty string"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["heading"].concat(_toConsumableArray(additionalClasses)); // set HTML tag for heading

  var Markup = "h".concat(headingLevel); // render heading if there are no errors

  return validateHeading(headingLevel, headingText).length > 0 ? null : React.createElement("div", {
    style: headingStyles,
    className: "".concat(classes.join(" "))
  }, React.createElement(Markup, null, headingText));
};

Heading.defaultProps = {
  additionalClasses: [],
  color: 'dark',
  scopedStyles: {}
};
export default Heading;