/**
 * ----------
 * QUOTE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Quote = ({
  additionalClasses,
  citation,
  quoteText
}) => {
  const classes = ["quote", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>

    </section>
  )
}

Quote.propTypes = {
  additionalClasses: PropTypes.array,
  citation: PropTypes.string,
  quoteText: PropTypes.string.isRequired
}

Quote.defaultProps = {
  additionalClasses: []
}

export default Quote
