import React from "react"
import PropTypes from "prop-types"

const RichText = ({
  additionalClasses,
  children
}) => {
  const classes = ["rich-text", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      {children}
    </div>
  )
}

RichText.propTypes = {
  additionalClasses: PropTypes.array
}

RichText.defaultProps = {
  additionalClasses: []
}

export default RichText
