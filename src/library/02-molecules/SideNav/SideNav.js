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

import React from "react"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const SideNav = ({
  additionalClasses,
  direction,
  linkColor,
  menuItems
}) => {
  const validateMenu = linkColor => {
    let errors = []

    if (["column", "row", "column-reverse", "row-reverse"].indexOf(direction) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "SideNav > props.direction",
        message: "direction must be one of 'column' | 'row' | 'column-reverse' | 'row-reverse', these correspond to flex-direction values"
      })
    }

    if (["main", "secondary", "complementary", "dark", "light"].indexOf(linkColor) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "SideNav > props.linkColor",
        message: "link color must be one of 'main' | 'complementary' | 'secondary' | 'light' | 'dark'. These correspond to sass variables."
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  const classes = ["side-nav", ...additionalClasses]
  const navClasses = [`side-nav__nav--${direction}`]
  return validateMenu(linkColor).length > 0 ? null : (
    <aside className={`${classes.join(" ")}`}>
      <nav className={`${navClasses.join(" ")}`}>
        {
          menuItems.map(item => (
            <Link className={`color--${linkColor}`} key={ item.label } to={ item.link }>
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
