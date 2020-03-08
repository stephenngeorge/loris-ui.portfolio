import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * ----------
 * HEROGALLERY
 * ----------
 * 
 * Hero Gallery components are designed for the hero
 * section of the homepage, they display a rotation of
 * images.
 * The images prop should be an array of objects, in which
 * each image should be an object of shape:
 * 
 * {
 * ..imageAlt: string,
 * ..imageId: string,
 * ..imagePlaceholderSrc: string, (optional)
 * ..imagePos: {
 * ....x: number,
 * ....y: number
 * ..}, (optional)
 * ..imageSize: {
 * ....width: string, (number including css length)
 * ....height: string (number including css length)
 * ..},
 * ..imageSrc: string (filepath)
 * }
 * 
 */
import React, { useEffect, useState } from "react";
import { CoverImage } from '../../01-atoms';
import { DOWN_CHEVRON } from '../../demo/assets';

var HeroGallery = function HeroGallery(_ref) {
  var additionalClasses = _ref.additionalClasses,
      gallerySize = _ref.gallerySize,
      images = _ref.images;
  var randomIndex = Math.floor(Math.random() * Math.floor(images.length));

  var _useState = useState(randomIndex),
      _useState2 = _slicedToArray(_useState, 2),
      imageInView = _useState2[0],
      setImageInView = _useState2[1];

  useEffect(function () {
    var newIndex = imageInView + 1;
    if (newIndex === images.length) newIndex = 0; // the duration at the end here should match the 
    // animation duration set in the scss file (.image-cross-fade)

    setTimeout(function () {
      return setImageInView(newIndex);
    }, 7400);
  }, [imageInView, images]);
  var galleryStyles = {
    width: gallerySize.width,
    height: gallerySize.height
  };

  var handleScroll = function handleScroll() {
    var galleryHeight = document.querySelector('.hero-gallery').clientHeight;
    window.scrollTo(0, galleryHeight - 32);
  };

  var classes = ["hero-gallery"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("section", {
    style: galleryStyles,
    className: "".concat(classes.join(" "))
  }, images.map(function (image, i) {
    var viewClass = imageInView === i ? "image-cross-fade" : "";
    var galleryPosition = i === 0 ? "-".concat(100 * imageInView, "%") : "0";
    return React.createElement(CoverImage, Object.assign({
      additionalClasses: [viewClass],
      key: image.imageId
    }, image, {
      imageSize: _objectSpread({}, gallerySize),
      scopedStyles: {
        marginLeft: galleryPosition
      }
    }));
  }), React.createElement("img", {
    onClick: handleScroll,
    className: "down-chevron",
    src: DOWN_CHEVRON,
    alt: "chevron indicating downward scoll"
  }));
};

HeroGallery.defaultProps = {
  additionalClasses: [],
  gallerySize: {
    width: "100%",
    height: "100vh"
  }
};
export default HeroGallery;