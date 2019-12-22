/**
 * ----------
 * PAGENAV
 * ----------
 * 
 * Page Nav components are lists of links that act
 * as navigation within a page, i.e. the urls may change,
 * but the links in a Page Nav should not take you away 
 * from the page you are on.
 */

import React from "react"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const PageNav = ({
  additionalClasses,
  linkHighlight,
  links
}) => {
  const classes = [
    "page-nav",
    ...additionalClasses
  ]
  return (
    <nav className={`${classes.join(" ")}`}>
      {
        links.map(link => (
          <Link className={`page-nav__link page-nav__link--${linkHighlight}`} key={ link.label } to={ link.url }>
            { link.label }
          </Link>
        ))
      }
    </nav>
  )
}

PageNav.propTypes = {
  additionalClasses: PropTypes.array,
  linkHighlight: PropTypes.string,
  links: PropTypes.array.isRequired
}

PageNav.defaultProps = {
  additionalClasses: [],
  linkHighlight: "main"
}

export default PageNav
