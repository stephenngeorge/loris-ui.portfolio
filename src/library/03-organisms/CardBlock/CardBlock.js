/**
 * ----------
 * CARDBLOCK
 * ----------
 * 
 * Card Block components are a flex containier
 * for Card atoms. There is no limit to the number
 * of cards that can be rendered. On consumptoin,
 * component can either be set to wrap row and flow 
 * down the page, or wrap on column whence the overflow
 * on the x-axis becomes scrollable.
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"

import { ThemeContext } from '../../00-protons/Themer/Themer'

const CardBlock = ({
  additionalClasses,
  backgroundColor,
  children,
  rowContains
}) => {
  // consume theme and set styles
  const { colors } = useContext(ThemeContext)
  const blockStyles = {
    backgroundColor: colors[backgroundColor]
  }

  const classes = [
    "card-block",
    !!rowContains ? `card-block--row-${rowContains}` : '',
    ...additionalClasses
  ]
  return (
    <section style={ blockStyles } className={`${classes.join(" ")}`}>
      { children }
    </section>
  )
}

CardBlock.propTypes = {
  additionalClasses: PropTypes.array,
  backgroundColor: PropTypes.string,
  columnContains: PropTypes.number,
  rowContains: PropTypes.number,
}

CardBlock.defaultProps = {
  additionalClasses: [],
  backgroundColor: "mid",
}

export default CardBlock
