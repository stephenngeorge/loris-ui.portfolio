import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * RICH TEXT
 * ----------
 * 
 * Rich Text components are simply a wrapper for
 * other DOM elements. This allows rendering of
 * any other markup (anchor tags for example) with
 * consistent/controlled styling
 */
import React, { useEffect } from "react";

var RichText = function RichText(_ref) {
  var additionalClasses = _ref.additionalClasses,
      children = _ref.children,
      scopedStyles = _ref.scopedStyles;
  useEffect(function () {
    var animateText = function animateText(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-from-bottom__fade-in--medium');
        }
      });
    };

    var options = {
      threshold: .5
    };
    var observer = new IntersectionObserver(animateText, options);
    var textBlocks = Array.from(document.querySelectorAll('.rich-text'));
    if (textBlocks.length > 0) textBlocks.forEach(function (block) {
      return observer.observe(block);
    });
    return function () {
      return textBlocks.forEach(function (block) {
        return observer.unobserve(block);
      });
    };
  }, []);

  var styles = _objectSpread({}, scopedStyles);

  var classes = ["rich-text"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    style: styles,
    className: "".concat(classes.join(" "))
  }, children);
};

RichText.defaultProps = {
  additionalClasses: [],
  scopedStyles: {}
};
export default RichText;