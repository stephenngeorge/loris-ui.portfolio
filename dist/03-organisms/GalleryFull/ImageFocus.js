import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * IMAGEFOCUS
 * ----------
 * 
 * Image Focus components are used to display a single, large image
 * as selected from the ImageScroller component.
 * 
 * @see './GalleryFull.js'
 * 
 * Image Focus components accept an array of images, in which
 * each object should be of shape:
 * 
 * {
 * ..imageAlt: string,
 * ..imageId: string,
 * ..imageName: string,
 * ..imageSrc: string (filepath)
 * }
 * 
 */
import React from "react";
import { CoverImage } from '../../01-atoms';

var ImageFocus = function ImageFocus(_ref) {
  var additionalClasses = _ref.additionalClasses,
      focusImage = _ref.focusImage,
      images = _ref.images;
  var classes = ["image-focus"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    className: "".concat(classes.join(" "))
  }, React.createElement(CoverImage, Object.assign({}, images[focusImage], {
    imageSize: {
      width: "100%",
      height: "auto"
    }
  })));
};

ImageFocus.defaultProps = {
  additionalClasses: []
};
export default ImageFocus;