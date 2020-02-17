/**
 * ----------
 * PAGENAV
 * ----------
 * 
 * Page Nav components are lists of links that act
 * as navigation within a page, i.e. the urls may change,
 * but the links in a Page Nav should not take you away 
 * from the page you are on.
 * 
 */

import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { ThemeContext } from '../../00-protons/Themer/Themer'

const PageNav = ({
  additionalClasses,
  linkHighlight,
  links,
  scopedStyles
}) => {
  // consume theme and set styles
  const { colors, fontFamilies, fontWeights, layout } = useContext(ThemeContext)
  const navStyles = {
    color: colors.dark,
    fontFamily: fontFamilies.serif,
    fontWeight: fontWeights.heavy,
    padding: layout.spacing_md,
    ...scopedStyles
  }

  const underlineStyles = {
    backgroundColor: colors[linkHighlight]
  }

  const classes = [
    "page-nav",
    ...additionalClasses
  ]
  return (
    <nav style={ navStyles } className={`${classes.join(" ")}`}>
      {
        links.map(link => (
          <Link className={`page-nav__link page-nav__link--${linkHighlight}`} key={ link.label } to={ link.url }>
            { link.label }
            <div style={ underlineStyles } className="underline"></div>
          </Link>
        ))
      }
    </nav>
  )
}

PageNav.propTypes = {
  additionalClasses: PropTypes.array,
  linkHighlight: PropTypes.string,
  links: PropTypes.array.isRequired,
  scopedStyles: PropTypes.object
}

PageNav.defaultProps = {
  additionalClasses: [],
  linkHighlight: "main",
  scopedStyles: {}
}

export default PageNav
