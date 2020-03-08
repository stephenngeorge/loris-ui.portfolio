import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * PAGENAV
 * ----------
 * 
 * Page Nav components are lists of links that act
 * as navigation within a page, i.e. the urls may change,
 * but the links in a Page Nav should not take you away 
 * from the page you are on.
 * 
 */
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var PageNav = function PageNav(_ref) {
  var additionalClasses = _ref.additionalClasses,
      linkHighlight = _ref.linkHighlight,
      links = _ref.links,
      scopedStyles = _ref.scopedStyles;
  // animate page nav
  useEffect(function () {
    var animatePageNav = function animatePageNav(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var _links = Array.from(document.querySelectorAll('.page-nav__link'));

          _links.forEach(function (link, i) {
            link.style.animationDelay = ".".concat(i * 2, "s");
            link.classList.add('slide-from-top__fade-in--medium');
          });
        }
      });
    };

    var options = {
      threshold: .6
    };
    var observer = new IntersectionObserver(animatePageNav, options);
    var pageNav = document.querySelector('.page-nav');
    observer.observe(pageNav);
    return function () {
      return observer.unobserve(pageNav);
    };
  }, []); // consume theme and set styles

  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors,
      fontFamilies = _useContext.fontFamilies,
      fontWeights = _useContext.fontWeights,
      layout = _useContext.layout;

  var navStyles = _objectSpread({
    color: colors.dark,
    fontFamily: fontFamilies.serif,
    fontWeight: fontWeights.heavy,
    padding: layout.spacing_md
  }, scopedStyles);

  var underlineStyles = {
    backgroundColor: colors[linkHighlight]
  };
  var classes = ["page-nav", "text-container--narrow"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("nav", {
    style: navStyles,
    className: "".concat(classes.join(" "))
  }, links.map(function (link) {
    return React.createElement(Link, {
      className: "page-nav__link page-nav__link--".concat(linkHighlight),
      key: link.label,
      to: link.path
    }, link.label, React.createElement("div", {
      style: underlineStyles,
      className: "underline"
    }));
  }));
};

PageNav.defaultProps = {
  additionalClasses: [],
  linkHighlight: "main",
  scopedStyles: {}
};
export default PageNav;