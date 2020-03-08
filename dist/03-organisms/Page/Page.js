import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * PAGE
 * ----------
 * 
 * Page components are wrappers for the app content.
 * They display a header (which includes the nav bar)
 * and a footer, with the page contents rendered therein.
 * 
 * The footer is forced to the bottom and the Page itself
 * is set to always be at least 100vh tall.
 * 
 */
import React, { useEffect } from "react";
import { Footer, MainNav } from '../../02-molecules';

var Page = function Page(_ref) {
  var accreditationLink = _ref.accreditationLink,
      accreditationText = _ref.accreditationText,
      additionalClasses = _ref.additionalClasses,
      children = _ref.children,
      iconsListData = _ref.iconsListData,
      menuLinks = _ref.menuLinks,
      siteLogo = _ref.siteLogo,
      siteMapLinks = _ref.siteMapLinks,
      siteTitle = _ref.siteTitle;
  useEffect(function () {
    var positionFooter = function positionFooter() {
      var page = document.querySelector('.page');
      var footer = document.querySelector('footer');

      if (footer !== null && footer !== undefined) {
        page.style.paddingBottom = "".concat(footer.clientHeight, "px");
      }
    };

    positionFooter();
    window.addEventListener('resize', positionFooter);
    return function () {
      return window.removeEventListener('resize', positionFooter);
    };
  }, []);
  var classes = ["page"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    className: "".concat(classes.join(" "))
  }, React.createElement("header", null, React.createElement(MainNav, {
    menuLinks: menuLinks,
    siteTitle: siteTitle,
    siteLogo: siteLogo
  })), React.createElement("main", null, children), React.createElement(Footer, {
    accreditationLink: accreditationLink,
    accreditationText: accreditationText,
    iconsListData: iconsListData,
    siteMapLinks: siteMapLinks
  }));
};

Page.defaultProps = {
  additionalClasses: []
};
export default Page;