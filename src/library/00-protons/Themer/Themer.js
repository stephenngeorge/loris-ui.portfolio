/**
 * ----------
 * THEMER
 * ----------
 * 
 * Comment block, describe your component here
 */

import React, { createContext } from "react"
import PropTypes from "prop-types"

import defaultTheme from './defaultTheme'

export const ThemeContext = createContext()

const Themer = ({
  children,
  theme
}) => {
  const setTheme = {...defaultTheme, ...theme}
  
  return (
    <ThemeContext.Provider value={ setTheme }>
      { children }
    </ThemeContext.Provider>
  )
}

Themer.propTypes = {
  theme: PropTypes.object.isRequired
}

Themer.defaultProps = {
  theme: {}
}

export default Themer
