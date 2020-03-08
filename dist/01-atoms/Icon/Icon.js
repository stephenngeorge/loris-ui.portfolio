import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * ICON
 * ----------
 * 
 * Icon components render an .svg file to the screen at
 * a sepcified size.
 */
import React, { useContext } from "react";
import * as errorTypes from "../../errorTypes";
import { ThemeContext } from '../../00-protons/Themer/Themer';

var Icon = function Icon(_ref) {
  var additionalClasses = _ref.additionalClasses,
      name = _ref.name,
      scopedStyles = _ref.scopedStyles,
      size = _ref.size,
      src = _ref.src,
      url = _ref.url;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      iconSizes = _useContext.iconSizes;

  var imageStyles = _objectSpread({
    width: iconSizes[size],
    height: iconSizes[size]
  }, scopedStyles); // validate icon, checks size is one of the allowed values


  var validateIcon = function validateIcon(size) {
    var errors = [];

    if (["xs", "sm", "md", "lg", "xl"].indexOf(size) < 0) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "Icon > props.size",
        message: "Size must be one of 'xs' | 'sm' | 'md' | 'lg' | 'xl'"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["icon", "icon--".concat(size), url.length > 0 ? "icon--link" : ""].concat(_toConsumableArray(additionalClasses));
  return validateIcon(size).length > 0 ? null : url.length === 0 ? React.createElement("div", {
    className: "".concat(classes.join(" "))
  }, React.createElement("img", {
    style: imageStyles,
    src: src,
    alt: name
  })) : React.createElement("a", {
    href: url,
    className: "".concat(classes.join(" "))
  }, React.createElement("img", {
    style: imageStyles,
    src: src,
    alt: name
  }));
};

Icon.defaultProps = {
  additionalClasses: [],
  scopedStyles: {},
  size: "sm",
  url: ""
};
export default Icon;