/**
 * ----------
 * MAINNAV
 * ----------
 * 
 * Main Nav components are the top level navigation of the
 * site, intended to be used on every page. There is a 'light'
 * and 'dark' mode for use in differnet contexts. Main Nav
 * components take a menuLinks props, which is an array of
 * objects, in which each object should be of shape:
 * 
 * {
 * ..path: string,
 * ..label: string
 * }
 * 
 */

import React, { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"

import { ThemeContext } from '../../00-protons/Themer/Themer'

const MainNav = ({
  additionalClasses,
  menuLinks,
  siteTitle
}) => {
  const [colorTheme, setColorTheme] = useState("dark")
  const location = useLocation()
  useEffect(() => {
    const selectColorTheme = () => {
      switch (location.pathname) {
        case "/":
          if (window.innerWidth >= 992) {
            setColorTheme("light")
          }
          else setColorTheme("dark")
          break
        default:
          setColorTheme("dark")
      }
    }
    selectColorTheme()

    const applyDarkTheme = () => {
      if (window.innerWidth >= 992) {
        if (window.scrollY > window.innerHeight / 3) setColorTheme("dark")
        else setColorTheme("light")
      }
    }
    
    window.addEventListener("resize", selectColorTheme)
    window.addEventListener("scroll", applyDarkTheme)

    return () => {
      window.removeEventListener("resize", selectColorTheme)
      window.removeEventListener("scroll", applyDarkTheme)
    }
      
  }, [location.pathname])

  // consume theme and set styles
  const { fontFamilies, fontSizes } = useContext(ThemeContext)
  const menuStyles = {
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.default
  }
  const linkStyles = {
    fontFamily: fontFamilies.sans_serif
  }

  // menu behaviours
  const controlMenu = (func) => {
    const menu = document.querySelector(".main-nav__menu")
    const icon = document.querySelector(".main-nav__menu-icon")

    if (menu !== null && menu !== undefined) {
      menu.classList[func]('onscreen')
      icon.classList[func]('icon-arrow')
    }
  }


  const classes = [
    "main-nav",
    `main-nav--${colorTheme}`,
    ...additionalClasses
  ]
  return (
    <div style={ menuStyles } className={`${classes.join(" ")}`}>
      <div className="main-nav__controls">
        <Link onClick={ () => controlMenu('remove') } to="/">{ siteTitle }</Link>
        <button onClick={ () => controlMenu('toggle') } className="main-nav__menu-icon">
          <div className="main-nav__menu-icon--top"></div>
          <div className="main-nav__menu-icon--middle"></div>
          <div className="main-nav__menu-icon--bottom"></div>
        </button>
      </div>
      <nav style={ linkStyles } className="main-nav__menu">
        { menuLinks.map(link => (
          <Link onClick={ () => controlMenu('remove') } key={ link.label } to={ link.path }>{ link.label }</Link>) 
        ) }
      </nav>
    </div>
  )
}

MainNav.propTypes = {
  additionalClasses: PropTypes.array,
  menuLinks: PropTypes.array.isRequired,
  siteTitle: PropTypes.string.isRequired
}

MainNav.defaultProps = {
  additionalClasses: [],
}

export default MainNav