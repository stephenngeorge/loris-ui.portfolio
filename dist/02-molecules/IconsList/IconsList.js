import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * ICONSLIST
 * ----------
 * 
 * Icons List components show up icons (.svg files)
 * that are wrapped as in links.
 * Each icon in the props.icons should be an object of shape:
 * {
 * ..name: String,
 * ..size: String,
 * ..src: String (file path to svg),
 * ..url: String (url)
 * }
 */
import React, { useEffect } from "react";
import { Icon } from '../../01-atoms';
import * as errorTypes from '../../errorTypes';

var IconsList = function IconsList(_ref) {
  var additionalClasses = _ref.additionalClasses,
      direction = _ref.direction,
      icons = _ref.icons;
  useEffect(function () {
    var animateIconsList = function animateIconsList(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // get icons
          var _icons = Array.from(entry.target.querySelectorAll('.icon'));

          _icons.forEach(function (icon, i) {
            icon.style.animationDelay = ".".concat(i * 2, "s");
            icon.classList.add('slide-from-right__fade-in--medium');
          });
        }
      });
    };

    var lists = Array.from(document.querySelectorAll('.icons-list'));
    var options = {
      threshold: .6
    };
    var observer = new IntersectionObserver(animateIconsList, options);
    lists.forEach(function (list) {
      return observer.observe(list);
    });
    return function () {
      return lists.forEach(function (list) {
        return observer.unobserve(list);
      });
    };
  }, []);

  var validateList = function validateList(direction) {
    var errors = [];

    if (["column", "row", "column-reverse", "row-reverse"].indexOf(direction) < 0) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "IconsList > props.direction",
        message: "Direction corresponds to flex direction, and should be one of 'column' | 'row' | 'column-reverse' | 'row-reverse'"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["icons-list", "icons-list--".concat(direction)].concat(_toConsumableArray(additionalClasses));
  return validateList(direction).length > 0 ? null : React.createElement("ul", {
    className: "".concat(classes.join(" "))
  }, icons.map(function (icon) {
    return React.createElement("li", {
      key: icon.name
    }, React.createElement(Icon, icon));
  }));
};

IconsList.defaultProps = {
  additionalClasses: [],
  direction: "column",
  size: "sm"
};
export default IconsList;