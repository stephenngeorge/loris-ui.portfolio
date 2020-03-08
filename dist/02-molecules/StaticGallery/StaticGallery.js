import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * STATICGALLERY
 * ----------
 * 
 * Static Gallery components render a collection of images under
 * a common title/category.
 * Static Gallery accepts an images prop, which is an array of 
 * objects in which each image object should be of shape:
 * 
 * {
 * ..imageAlt: string,
 * ..imageId: string,
 * ..imagePlaceholderSrc: string, (filepath)
 * ..imageSrc: string, (filepath)
 * }
 * 
 */
import React from "react";
import { ImageLoader, Title } from '../../01-atoms';
import { SideNav } from '../../02-molecules';

var StaticGallery = function StaticGallery(_ref) {
  var additionalClasses = _ref.additionalClasses,
      images = _ref.images,
      sideNavMenuItems = _ref.sideNavMenuItems,
      titleText = _ref.titleText,
      titleLevel = _ref.titleLevel,
      underlineColor = _ref.underlineColor;
  var classes = ["static-gallery"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("section", {
    className: "".concat(classes.join(" "))
  }, React.createElement(SideNav, {
    direction: "column",
    linkColor: "secondary",
    menuItems: sideNavMenuItems
  }), React.createElement("div", {
    className: "static-gallery__gallery-content"
  }, React.createElement(Title, {
    titleLevel: titleLevel,
    titleText: titleText,
    underlineColor: underlineColor
  }), React.createElement("div", {
    className: "static-gallery__images"
  }, images.map(function (image) {
    return React.createElement(ImageLoader, Object.assign({
      key: image.imageId
    }, image));
  }))));
};

StaticGallery.defaultProps = {
  additionalClasses: [],
  sideNavMenuItems: [],
  titleLevel: 2,
  underlineColor: "main"
};
export default StaticGallery;