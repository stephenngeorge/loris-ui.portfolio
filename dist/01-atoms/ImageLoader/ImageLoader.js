import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * ----------
 * IMAGELOADER
 * ----------
 * 
 * Image Loader components are wrappers for rendering
 * large image files that might be slow to load. They
 * render a placeholder image and update to the target
 * image once it has fully loaded.
 * 
 */
import React, { useEffect, useState } from "react";

var ImageLoader = function ImageLoader(_ref) {
  var additionalClasses = _ref.additionalClasses,
      imageAlt = _ref.imageAlt,
      imageId = _ref.imageId,
      imageSrc = _ref.imageSrc,
      placeholderImageSrc = _ref.placeholderImageSrc;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  useEffect(function () {
    var componentImage = document.querySelector("#".concat(imageId));

    if (componentImage !== null && componentImage !== undefined) {
      var targetImage = new Image();

      targetImage.onload = function () {
        setIsLoading(false);
        componentImage.src = targetImage.src;
      };

      targetImage.src = imageSrc;
    }
  }, [imageSrc, imageId]);
  var classes = ["image-loader", isLoading ? "image-loader--loading" : ""].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    className: "".concat(classes.join(" "))
  }, React.createElement("img", {
    alt: imageAlt,
    id: imageId,
    src: placeholderImageSrc
  }));
};

ImageLoader.defaultProps = {
  additionalClasses: [],
  imageAlt: "Loris UI - Portfolio image-loader image"
};
export default ImageLoader;