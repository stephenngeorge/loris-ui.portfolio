import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * ----------
 * MAINNAV
 * ----------
 * 
 * Main Nav components are the top level navigation of the
 * site, intended to be used on every page. There is a 'light'
 * and 'dark' mode for use in differnet contexts. Main Nav
 * components take a menuLinks props, which is an array of
 * objects, in which each object should be of shape:
 * 
 * {
 * ..path: string,
 * ..label: string
 * }
 * 
 */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from '../../00-protons/Themer/Themer';

var MainNav = function MainNav(_ref) {
  var additionalClasses = _ref.additionalClasses,
      menuLinks = _ref.menuLinks,
      scopedStyles = _ref.scopedStyles,
      siteLogo = _ref.siteLogo,
      siteTitle = _ref.siteTitle;

  var _useState = useState("dark"),
      _useState2 = _slicedToArray(_useState, 2),
      colorTheme = _useState2[0],
      setColorTheme = _useState2[1];

  var location = useLocation(); // animate nav

  useEffect(function () {
    if (window.innerWidth >= 992) {
      var animateNav = function animateNav(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // get DOM nodes
            var _menuLinks = Array.from(mainNav.querySelectorAll('a'));

            var title = document.querySelector('.site-title');
            title.classList.add('slide-from-left__fade-in--medium');

            _menuLinks.forEach(function (link, i) {
              link.style.animationDelay = ".".concat(i * 2, "s");
              link.classList.add('slide-from-top__fade-in--medium');
            });
          }
        });
      };

      var mainNav = document.querySelector('.main-nav__menu');
      var options = {
        threshold: 1
      };
      var observer = new IntersectionObserver(animateNav, options);
      observer.observe(mainNav);
      return function () {
        return observer.unobserve(mainNav);
      };
    }
  }, []); // handle color theme

  useEffect(function () {
    var selectColorTheme = function selectColorTheme() {
      switch (location.pathname) {
        case "/":
          if (window.innerWidth >= 992 && window.scrollY < window.innerHeight / 3) {
            setColorTheme("light");
          } else setColorTheme("dark");

          break;

        default:
          setColorTheme("dark");
      }
    };

    selectColorTheme();

    var menuScrollBehaviours = function menuScrollBehaviours() {
      if (window.innerWidth >= 992 && location.pathname === "/") {
        if (window.scrollY > window.innerHeight / 3) setColorTheme("dark");else setColorTheme("light");
      }
    };

    window.addEventListener("resize", selectColorTheme);
    window.addEventListener("scroll", menuScrollBehaviours);
    return function () {
      window.removeEventListener("resize", selectColorTheme);
      window.removeEventListener("scroll", menuScrollBehaviours);
    };
  }, [location.pathname]); // consume theme and set styles

  var _useContext = useContext(ThemeContext),
      fontFamilies = _useContext.fontFamilies,
      fontSizes = _useContext.fontSizes;

  var menuStyles = _objectSpread({
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.default
  }, scopedStyles);

  var linkStyles = {
    fontFamily: fontFamilies.sans_serif
  }; // menu behaviours

  var controlMenu = function controlMenu(func) {
    var menu = document.querySelector(".main-nav__menu");
    var icon = document.querySelector(".main-nav__menu-icon");

    if (menu !== null && menu !== undefined) {
      menu.classList[func]('onscreen');
      icon.classList[func]('icon-arrow');
    }
  };

  var classes = ["main-nav", "main-nav--".concat(colorTheme), window.innerWidth >= 992 ? 'main-nav--wide' : 'main-nav--narrow'].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    className: "nav-wrapper--".concat(colorTheme)
  }, React.createElement("div", {
    style: menuStyles,
    className: "".concat(classes.join(" "))
  }, React.createElement("div", {
    className: "main-nav__controls"
  }, React.createElement(Link, {
    className: "site-title",
    onClick: function onClick() {
      return controlMenu('remove');
    },
    to: "/"
  }, siteLogo && React.createElement("img", {
    src: siteLogo,
    alt: "Neil George Photography Logo",
    className: "site-logo"
  }), siteTitle), React.createElement("button", {
    onClick: function onClick() {
      return controlMenu('toggle');
    },
    className: "main-nav__menu-icon"
  }, React.createElement("div", {
    className: "main-nav__menu-icon--top"
  }), React.createElement("div", {
    className: "main-nav__menu-icon--middle"
  }), React.createElement("div", {
    className: "main-nav__menu-icon--bottom"
  }))), React.createElement("nav", {
    style: linkStyles,
    className: "main-nav__menu"
  }, menuLinks.map(function (link) {
    return React.createElement(Link, {
      onClick: function onClick() {
        return controlMenu('remove');
      },
      key: link.label,
      to: link.path
    }, link.label);
  }))));
};

MainNav.defaultProps = {
  additionalClasses: [],
  scopedStyles: {}
};
export default MainNav;