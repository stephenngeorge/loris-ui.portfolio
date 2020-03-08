import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * IMAGESCROLLER
 * ----------
 * 
 * Image Scroller components are used to display a scrollable
 * area full of a gallery of images. Image Scrollers are consumed
 * by the GalleryFull component.
 * 
 * @see './GalleryFull.js'
 * 
 * Image Scroller components accept an array of images, in which
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
import React, { useContext } from "react";
import { ImageLoader } from '../../01-atoms';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var ImageScroller = function ImageScroller(_ref) {
  var additionalClasses = _ref.additionalClasses,
      bgColor = _ref.bgColor,
      images = _ref.images,
      scopedStyles = _ref.scopedStyles,
      setFocusImage = _ref.setFocusImage;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors;

  var scrollerStyles = _objectSpread({
    backgroundColor: colors[bgColor],
    color: colors.dark
  }, scopedStyles);

  var classes = ["image-scroller"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    style: scrollerStyles,
    className: "".concat(classes.join(" "))
  }, images.length > 0 && images.map(function (image, i) {
    return React.createElement("div", {
      onClick: function onClick() {
        return setFocusImage(i);
      },
      className: "image-scroller__image",
      key: image.imageId
    }, React.createElement(ImageLoader, image), React.createElement("p", {
      className: "image-scroller__image--name"
    }, image.imageName));
  }));
};

ImageScroller.defaultProps = {
  additionalClasses: [],
  scopedStyles: {}
};
export default ImageScroller;