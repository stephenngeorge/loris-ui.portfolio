import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * TITLE
 * ----------
 * 
 * Title components render a heading of any specified
 * level. They are rendered with an optional, coloured
 * highlight that covers half the height of the text
 */
import React, { useContext, useEffect } from "react";
import * as errorTypes from '../../errorTypes';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var Title = function Title(_ref) {
  var additionalClasses = _ref.additionalClasses,
      scopedStyles = _ref.scopedStyles,
      titleLevel = _ref.titleLevel,
      titleText = _ref.titleText,
      underlineColor = _ref.underlineColor;
  useEffect(function () {
    var animateUnderline = function animateUnderline(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var underline = entry.target.querySelector('.underline');
          titleText.length < 20 ? underline.classList.add('title-underline-half--medium') : underline.classList.add('title-underline-full--medium');
        }
      });
    };

    var options = {
      threshold: .9
    };
    var observer = new IntersectionObserver(animateUnderline, options);
    var titles = Array.from(document.querySelectorAll('.title'));
    if (titles.length > 0) titles.forEach(function (title) {
      return observer.observe(title);
    });
    return function () {
      return titles.forEach(function (title) {
        return observer.unobserve(title);
      });
    };
  }, [titleText]); //consume context and set styles

  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors;

  var underlineStyles = {
    backgroundColor: colors[underlineColor],
    width: "0"
  };

  var styles = _objectSpread({}, scopedStyles); // validate title, checks titleLevel is within range and that titleText is not
  // an empty string.


  var isValidTitle = function isValidTitle(titleLevel, titleText) {
    var errors = [];

    if (titleLevel < 1 || titleLevel > 6) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "Title > props.headingLevel",
        message: "headingLevel is out of range, you must pass a number between 1 - 6 to this prop"
      });
    }

    if (titleText.length <= 0) {
      errors.push({
        type: errorTypes.VALUE_EMPTY_OR_NULL,
        source: "Title > props.headingText",
        message: "headingText is empty, you must a string of length >= 1"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["title", "underline-color--".concat(underlineColor)].concat(_toConsumableArray(additionalClasses));
  var HTMLTag = "h".concat(titleLevel);
  return isValidTitle(titleLevel, titleText).length > 0 ? null : React.createElement(HTMLTag, {
    style: styles,
    className: "".concat(classes.join(" "))
  }, titleText, React.createElement("div", {
    style: underlineStyles,
    className: "underline"
  }));
};

Title.defaultProps = {
  additionalClasses: [],
  scopedStyles: {},
  titleLevel: 1,
  underlineColor: "main"
};
export default Title;