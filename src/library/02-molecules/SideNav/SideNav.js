/**
 * ----------
 * SIDENAV
 * ----------
 * 
 * Side Nav components are to display a list of links. This is 
 * secondary navigation and should not be used for the main site nav,
 * display these links next to some other content.
 * Each item in the menuItems array should be of shape:
 * {
 * ..label: String,
 * ..link: String (valid path to an App route),
 * }
 */

import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { ThemeContext } from '../../00-protons/Themer/Themer'

const SideNav = ({
  additionalClasses,
  direction,
  linkColor,
  menuItems
}) => {
  // consume theme and set styles
  const { colors, fontFamilies, fontSizes } = useContext(ThemeContext)
  const navStyles = {
    color: colors[linkColor],
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.lead
  }

  const validateMenu = direction => {
    let errors = []

    if (["column", "row", "column-reverse", "row-reverse"].indexOf(direction) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "SideNav > props.direction",
        message: "direction must be one of 'column' | 'row' | 'column-reverse' | 'row-reverse', these correspond to flex-direction values"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  const classes = ["side-nav", ...additionalClasses]
  const navClasses = [`side-nav__nav--${direction}`]
  return validateMenu(direction).length > 0 ? null : (
    <aside className={`${classes.join(" ")}`}>
      <nav style={ navStyles } className={`${navClasses.join(" ")}`}>
        {
          menuItems.map(item => (
            <Link key={ item.label } to={ item.link }>
              { item.label }
            </Link>
          ))
        }
      </nav>
    </aside>
  )
}

SideNav.propTypes = {
  additionalClasses: PropTypes.array,
  direction: PropTypes.string,
  linkColor: PropTypes.string,
  menuItems: PropTypes.array.isRequired
}

SideNav.defaultProps = {
  additionalClasses: [],
  direction: "column",
  linkColor: "main"
}

export default SideNav
