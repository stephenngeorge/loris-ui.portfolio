const borders = {
  /// *** *** ***
  /// ----------
  /// BORDER WIDTH
  /// ----------
  /// css `border-width: $value`
  /// @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
  borderWidth_thin: ".25rem",
  borderWidth: ".125rem",
  borderWidth_thick: ".25rem",
  /// border-style should be set as a string in the component,
  /// border-color should be set using the theme's colour properties.
  /// *** *** ***
  /// ----------
  /// BORDER RADIUS
  /// ----------
  /// css `border-radius: $value`
  /// @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
  borderRadius_square: ".1rem",
  borderRadius: ".25rem",
  borderRadius_round: "50%",
  // this can be used to force a rounded corner in some situations
  borderRadius_force_round: "999px"
}

const colors = {
  /// ----------
  /// COLORS
  /// ----------
  /// Generic color definitions, to used for:
  /// css `color: $value`, `background-color: $value`, `box-shadow: ... ... ... ... $value` etc
  main: "#71BC78",
  complementary: "#BC7871",
  secondary: "#779AAD",
  dark: "#3E403F",
  veryDark: "#2B2C2C",
  mid: "#B1B2B2",
  light: "#FFFFFF"
}

const defaultTheme = {
  borders,
  colors
}

export default defaultTheme