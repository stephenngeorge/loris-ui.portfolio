import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * FOOTER
 * ----------
 * 
 * The Footer component will be rendered within the
 * Page component, a wrapper for all site pages.
 * Footers comprise a Site Map, a set of social media
 * links and a site accreditation.
 * 
 * Footer components accept an array of siteMapLinks, in
 * which each link should be an object of shape:
 * {
 * ..path: string, (url)
 * ..label: string
 * }
 * 
 * Footer components accept an object of iconsListData. This
 * should be structured to match the IconsList props object.
 * @see '../IconsList/IconsList.js'
 * 
 * The accreditationLink prop should be an object with properties
 * "url" and "text"
 * 
 */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import IconsList from '../IconsList/IconsList';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var Footers = function Footers(_ref) {
  var accreditationLink = _ref.accreditationLink,
      accreditationText = _ref.accreditationText,
      additionalClasses = _ref.additionalClasses,
      iconsListData = _ref.iconsListData,
      siteMapLinks = _ref.siteMapLinks;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors,
      fontFamilies = _useContext.fontFamilies,
      fontSizes = _useContext.fontSizes,
      layout = _useContext.layout;

  var footerStyles = {
    backgroundColor: colors.dark,
    padding: layout.spacing_md
  };
  var siteMapStyles = {
    color: colors.light,
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.sans_serif
  };
  var accreditationStyles = {
    color: colors.light,
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.serif
  };
  var classes = ["footer"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("footer", {
    style: footerStyles,
    className: "".concat(classes.join(" "))
  }, React.createElement("div", {
    style: siteMapStyles,
    className: "footer__site-map"
  }, React.createElement("p", {
    className: "footer__site-map--title"
  }, "Site Map"), React.createElement("ul", {
    className: "footer__site-map--links"
  }, siteMapLinks.map(function (link) {
    return React.createElement("li", {
      key: link.path
    }, React.createElement(Link, {
      to: link.path
    }, link.label));
  }))), React.createElement("div", {
    className: "footer__social-links"
  }, React.createElement(IconsList, iconsListData)), React.createElement("div", {
    style: accreditationStyles,
    className: "footer__accreditation"
  }, React.createElement("p", null, accreditationText), React.createElement("a", {
    href: accreditationLink.url
  }, accreditationLink.text)));
};

Footers.defaultProps = {
  additionalClasses: []
};
export default Footers;