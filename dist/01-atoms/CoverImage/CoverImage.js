import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * ----------
 * COVERIMAGE
 * ----------
 * 
 * Cover Image components display an img inside of a
 * container. These components use object-fit: cover to
 * ensure the container div is always filled.
 * @requires object-fit-polyfill
 * 
 */
import React, { useEffect, useState } from "react";
import * as errorTypes from '../../errorTypes';

var CoverImage = function CoverImage(_ref) {
  var additionalClasses = _ref.additionalClasses,
      coverImageId = _ref.coverImageId,
      imageAlt = _ref.imageAlt,
      imageId = _ref.imageId,
      imagePlaceholderSrc = _ref.imagePlaceholderSrc,
      imagePos = _ref.imagePos,
      imageSize = _ref.imageSize,
      imageSrc = _ref.imageSrc,
      scopedStyles = _ref.scopedStyles;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  useEffect(function () {
    var componentImage = document.querySelector("#".concat(imageId));

    if (componentImage !== null && componentImage !== undefined) {
      componentImage.classList.remove('image-in');
      var targetImage = new Image();

      targetImage.onload = function () {
        setIsLoading(false);
        componentImage.classList.add('image-in');
        componentImage.src = targetImage.src;
      };

      targetImage.src = imageSrc;
    }
  }, [imageSrc, imageId]);

  var styles = _objectSpread({
    width: imageSize.width,
    height: imageSize.height
  }, scopedStyles);

  var imageStyles = {
    objectPosition: "".concat(imagePos.x, " ").concat(imagePos.y)
  };

  var validateImage = function validateImage(imagePos, imageSize, imageSrc) {
    var errors = [];
    var imagePosKeys = Object.keys(imagePos);

    if (imagePosKeys.indexOf("x") < 0 || imagePosKeys.indexOf("y") < 0) {
      errors.push({
        type: errorTypes.OBJECT_MALFORMED,
        source: "CoverImage > props.imagePos",
        message: "imagePos prop must be an object containing keys 'x' and 'y'"
      });
    }

    var imageSizeKeys = Object.keys(imageSize);

    if (imageSizeKeys.indexOf("width") < 0 || imageSizeKeys.indexOf("height") < 0) {
      errors.push({
        type: errorTypes.OBJECT_MALFORMED,
        source: "CoverImage > props.imageSize",
        message: "imageSize props must be an object containing 'width' and 'height'"
      });
    }

    var filepath = imageSrc.split('.');

    if (["jpg", "jpeg", "png"].indexOf(filepath[filepath.length - 1]) < 0) {
      errors.push({
        type: errorTypes.UNALLOWED_FILE_TYPE,
        source: "CoverImage > props.imageSrc",
        message: "The image must be a '.jpg', '.jpeg' or '.png'. If you want to render an SVG, use the Icon component instead"
      });
    }

    for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
      var error = _errors[_i];
      console.warn("".concat(error.type, ": ").concat(error.source, "\n").concat(error.message));
    }

    return errors;
  };

  var classes = ["cover-image", isLoading ? "image-loading" : ""].concat(_toConsumableArray(additionalClasses));
  return validateImage(imagePos, imageSize, imageSrc).length > 0 ? null : React.createElement("div", {
    style: styles,
    className: "".concat(classes.join(" ")),
    id: coverImageId
  }, React.createElement("img", {
    "data-object-fit": "cover",
    alt: imageAlt,
    id: imageId,
    src: imagePlaceholderSrc ? imagePlaceholderSrc : imageSrc,
    style: imageStyles
  }));
};

CoverImage.defaultProps = {
  additionalClasses: [],
  imageAlt: "loris-ui.portfolio image",
  imagePos: {
    x: "50%",
    y: "50%"
  },
  imageSize: {
    width: "24rem",
    height: "16rem"
  },
  scopedStyles: {}
};
export default CoverImage;