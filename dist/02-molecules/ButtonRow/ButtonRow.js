import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * BUTTON ROW
 * ----------
 * 
 * Button Row components render up to two buttons
 * on a line, each with their own props.
 * ButtonRow accepts an array of buttons, each button
 * object in the array should contain any props that
 * are accepted by the button atom.
 */
import React, { useContext, useEffect } from "react";
import { LinkButton } from '../../01-atoms';
import { ThemeContext } from '../../00-protons/Themer/Themer';
import * as errorTypes from '../../errorTypes';

var ButtonRow = function ButtonRow(_ref) {
  var additionalClasses = _ref.additionalClasses,
      buttons = _ref.buttons,
      rowColor = _ref.rowColor,
      rowWidth = _ref.rowWidth,
      scopedStyles = _ref.scopedStyles;
  useEffect(function () {
    var buttonRow = document.querySelector('.button-row');
    var underline = buttonRow.querySelector('.underline');

    var animateButtonRow = function animateButtonRow(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // get buttons
          var _buttons = Array.from(buttonRow.querySelectorAll('.link-button'));

          _buttons.forEach(function (btn, i) {
            btn.style.animationDelay = ".".concat(i * 2, "s");
            btn.classList.add('slide-from-bottom__fade-in--medium');
            underline.classList.add('scale-in-underline');
          });
        }
      });
    };

    var options = {
      threshold: 1
    };
    var observer = new IntersectionObserver(animateButtonRow, options);
    observer.observe(buttonRow);
    return function () {
      return observer.unobserve(buttonRow);
    };
  }); // consume theme and set styles

  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors;

  var underlineStyles = {
    borderBottom: "2px solid ".concat(colors[rowColor])
  };

  var styles = _objectSpread({}, scopedStyles);

  var validateRow = function validateRow(rowWidth) {
    var errors = [];

    if (["narrow", "very-narrow"].indexOf(rowWidth) < 0) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "ButtonRow > props.rowWidth",
        message: "The 'rowWidth' prop must be one of 'narrow' | 'very-narrow'. You should not pass an empty string. If you want the button container to be full wiidth, simply don't set the prop at all"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["button-row"].concat(_toConsumableArray(additionalClasses));
  var widthClass = rowWidth ? "text-container--".concat(rowWidth) : "";
  return validateRow(rowWidth).length > 0 ? null : React.createElement("div", {
    style: styles,
    className: "".concat(classes.join(" "))
  }, React.createElement("ul", {
    className: "button-row--list ".concat(widthClass)
  }, buttons.map(function (button, i) {
    return React.createElement("li", {
      key: i
    }, React.createElement(LinkButton, Object.assign({
      buttonBgColor: rowColor,
      buttonBorderColor: rowColor
    }, button)));
  })), React.createElement("div", {
    style: underlineStyles,
    className: "underline"
  }));
};

ButtonRow.defaultProps = {
  additionalClasses: [],
  rowColor: 'main',
  rowWidth: 'narrow',
  scopedStyles: {}
};
export default ButtonRow;