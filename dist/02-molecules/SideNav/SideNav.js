import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * SIDENAV
 * ----------
 * 
 * Side Nav components are to display a list of links. This is 
 * secondary navigation and should not be used for the main site nav,
 * display these links next to some other content.
 * Each item in the menuItems array should be of shape:
 * {
 * ..label: String,
 * ..path: String (valid path to an App route),
 * }
 */
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var SideNav = function SideNav(_ref) {
  var additionalClasses = _ref.additionalClasses,
      direction = _ref.direction,
      linkColor = _ref.linkColor,
      menuItems = _ref.menuItems,
      scopedStyles = _ref.scopedStyles;
  // animate side nav
  useEffect(function () {
    var sideNav = document.querySelector('.side-nav');

    var animateSideNav = function animateSideNav(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var sideNavLinks = Array.from(sideNav.querySelectorAll('a'));
          sideNavLinks.forEach(function (link, i) {
            link.style.animationDelay = "".concat(i * 120, "ms");
            link.classList.add('slide-from-right__fade-in--slow');
          });
        }
      });
    };

    var options = {
      threshold: .5
    };
    var observer = new IntersectionObserver(animateSideNav, options);
    observer.observe(sideNav);
    return function () {
      return observer.unobserve(sideNav);
    };
  }, []); // consume theme and set styles

  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors,
      fontFamilies = _useContext.fontFamilies,
      fontSizes = _useContext.fontSizes;

  var navStyles = _objectSpread({
    color: colors[linkColor],
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.lead
  }, scopedStyles);

  var validateMenu = function validateMenu(direction) {
    var errors = [];

    if (["column", "row", "column-reverse", "row-reverse"].indexOf(direction) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "SideNav > props.direction",
        message: "direction must be one of 'column' | 'row' | 'column-reverse' | 'row-reverse', these correspond to flex-direction values"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["side-nav"].concat(_toConsumableArray(additionalClasses));
  var navClasses = ["side-nav__nav--".concat(direction)];
  return validateMenu(direction).length > 0 ? null : React.createElement("aside", {
    className: "".concat(classes.join(" "))
  }, React.createElement("nav", {
    style: navStyles,
    className: "".concat(navClasses.join(" "))
  }, menuItems.map(function (item) {
    return React.createElement(Link, {
      key: item.label,
      to: item.path
    }, item.label);
  })));
};

SideNav.defaultProps = {
  additionalClasses: [],
  direction: "column",
  linkColor: "main",
  scopedStyles: {}
};
export default SideNav;