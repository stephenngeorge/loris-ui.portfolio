const borders = {
  /// *** *** ***
  /// ----------
  /// BORDER WIDTH
  /// ----------
  /// css `border-width: $value`
  /// @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
  width: {
    thin: "1px",
    default: ".125rem",
    thick: ".25rem"
  },
  /// border-style should be set as a string in the component,
  /// border-color should be set using the theme's colour properties.
  /// *** *** ***
  /// ----------
  /// BORDER RADIUS
  /// ----------
  /// css `border-radius: $value`
  /// @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
  radius: {
    square: ".1rem",
    default: ".25rem",
    round: "50%",
    // this can be used to force a rounded corner in some situations
    force_round: "999px"
  }
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

const fonts = {
  /// ----------
  /// FONT SIZES
  /// ----------
  /// css `font-size: $value`
  /// @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
  sizes: {
    small: ".8rem",
    default: "1rem",
    lead: "1.4rem"
  },
  /// ----------
  /// FONT FAMILIES
  /// ----------
  /// css `font-fmaily: $value`
  /// @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
  families: {
    sans_serif: "'Open Sans', sans-serif",
    serif: "'Roboto Slab', serif"
  }
}

const defaultTheme = {
  borders,
  colors,
  fonts
}

export default defaultTheme