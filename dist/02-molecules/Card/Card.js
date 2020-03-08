import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * CARD
 * ----------
 * 
 * Comment block, describe your component here
 */
import React, { useContext } from "react";
import { Heading, RichText } from '../../01-atoms';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var Card = function Card(_ref) {
  var additionalClasses = _ref.additionalClasses,
      backgroundColor = _ref.backgroundColor,
      borderColor = _ref.borderColor,
      cardHeading = _ref.cardHeading,
      cardSubHeading = _ref.cardSubHeading,
      children = _ref.children,
      scopedStyles = _ref.scopedStyles;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      borderWidth = _useContext.borderWidth,
      borderRadius = _useContext.borderRadius,
      colors = _useContext.colors,
      fontFamilies = _useContext.fontFamilies,
      fontWeights = _useContext.fontWeights;

  var styles = _objectSpread({
    backgroundColor: colors[backgroundColor],
    border: "".concat(borderWidth.thin, " solid ").concat(colors[borderColor]),
    borderRadius: borderRadius.default
  }, scopedStyles);

  var classes = ["card"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("div", {
    style: styles,
    className: "".concat(classes.join(" "))
  }, !!cardHeading && React.createElement(Heading, {
    headingLevel: 3,
    headingText: cardHeading
  }), !!cardSubHeading && React.createElement(Heading, {
    headingLevel: 4,
    headingText: cardSubHeading,
    scopedStyles: {
      fontFamily: fontFamilies.sans_serif,
      fontWeight: fontWeights.normal
    }
  }), React.createElement(RichText, null, children));
};

Card.defaultProps = {
  additionalClasses: [],
  backgroundColor: "light",
  borderColor: "secondary",
  scopedStyles: {}
};
export default Card;