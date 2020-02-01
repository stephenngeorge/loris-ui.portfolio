/**
 * ----------
 * MAINNAV
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const MainNav = ({
  additionalClasses
}) => {
  const classes = ["main-nav", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

MainNav.propTypes = {
  additionalClasses: PropTypes.array
}

MainNav.defaultProps = {
  additionalClasses: []
}

export default MainNav
