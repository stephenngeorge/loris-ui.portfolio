import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * ----------
 * GALLERYFULL
 * ----------
 * 
 * Gallery Full components represent a gallery of images
 * that occupy a large section of the page, and often
 * are the entire page in their own right.
 * 
 * Gallery Full consumes the ImageScroller and ImageFocus
 * components as well as exposing a flexible content area
 * where the children are rendered.
 * 
 * @requires './ImageScroller.js'
 * @requires './ImageFocus.js'
 */
import React, { useState } from "react";
import ImageScroller from './ImageScroller';
import ImageFocus from './ImageFocus';

var GalleryFull = function GalleryFull(_ref) {
  var additionalClasses = _ref.additionalClasses,
      children = _ref.children,
      galleryColor = _ref.galleryColor,
      images = _ref.images;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      focusImage = _useState2[0],
      setFocusImage = _useState2[1];

  var classes = ["gallery-full"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("section", {
    className: "".concat(classes.join(" "))
  }, React.createElement(ImageScroller, {
    images: images,
    bgColor: galleryColor,
    setFocusImage: setFocusImage
  }), children, React.createElement(ImageFocus, {
    images: images,
    focusImage: focusImage
  }));
};

GalleryFull.defaultProps = {
  additionalClasses: [],
  galleryColor: "secondary_light"
};
export default GalleryFull;