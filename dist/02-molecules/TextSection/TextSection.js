import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * TEXT SECTION
 * ----------
 * 
 * Text Section components comprise a title (whcih defaults to <h2>)
 * and RichText, rendering the TextSection's children within the
 * rich-text styled div.
 * Both components within Text Section are optional and will not generate
 * any markup if their respective props are empty or undefined.
 * 
 */
import React, { useContext } from "react";
import { RichText, Title } from '../../01-atoms';
import { ThemeContext } from '../../00-protons/Themer/Themer';

var TextSection = function TextSection(_ref) {
  var additionalClasses = _ref.additionalClasses,
      children = _ref.children,
      titleLevel = _ref.titleLevel,
      titleText = _ref.titleText,
      underlineColor = _ref.underlineColor;

  // consume theme and set styles
  var _useContext = useContext(ThemeContext),
      layout = _useContext.layout;

  var sectionStyles = {
    padding: "".concat(layout.spacing_lg, " 0")
  };
  var classes = ["text-section"].concat(_toConsumableArray(additionalClasses));
  return React.createElement("section", {
    style: sectionStyles,
    className: "".concat(classes.join(" "))
  }, !!titleText && React.createElement(Title, {
    titleLevel: titleLevel,
    titleText: titleText,
    underlineColor: underlineColor
  }), !!children && React.createElement(RichText, null, children));
};

TextSection.defaultProps = {
  additionalClasses: [],
  headingLevel: 2
};
export default TextSection;