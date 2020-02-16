/**
 * ----------
 * PAGE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Page = ({
  additionalClasses
}) => {
  const classes = ["page", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

Page.propTypes = {
  additionalClasses: PropTypes.array
}

Page.defaultProps = {
  additionalClasses: []
}

export default Page
