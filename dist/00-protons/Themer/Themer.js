import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * ----------
 * THEMER
 * ----------
 * 
 * Comment block, describe your component here
 */
import React, { createContext } from "react";
import defaultTheme from './defaultTheme';
export var ThemeContext = createContext();

var Themer = function Themer(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  var setTheme = {
    borderRadius: _objectSpread({}, defaultTheme.borderRadius, {}, theme.borderRadius),
    borderWidth: _objectSpread({}, defaultTheme.borderWidth, {}, theme.borderWidth),
    colors: _objectSpread({}, defaultTheme.colors, {}, theme.colors),
    fontFamilies: _objectSpread({}, defaultTheme.fontFamilies, {}, theme.fontFamilies),
    fontSizes: _objectSpread({}, defaultTheme.fontSizes, {}, theme.fontSizes),
    fontWeights: _objectSpread({}, defaultTheme.fontWeights, {}, theme.fontWeights),
    iconSizes: _objectSpread({}, defaultTheme.iconSizes, {}, theme.iconSizes),
    layout: _objectSpread({}, defaultTheme.layout, {}, theme.layout)
  };
  return React.createElement(ThemeContext.Provider, {
    value: setTheme
  }, children);
};

Themer.defaultProps = {
  theme: {}
};
export default Themer;