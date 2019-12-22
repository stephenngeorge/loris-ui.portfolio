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

import React from "react"
import PropTypes from "prop-types"

const CardBlock = ({
  additionalClasses,
  backgroundColor,
  children,
  rowContains
}) => {
  const validateBlock = (backgroundColor, children) => {
    let errors = []

    if (["main", "secondary", "complementary", "dark", "light", "grey"].indexOf(backgroundColor) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "CardBlock > props.backgroundColor",
        message: "backgroundColor must be one of 'main' | 'secondary' | 'complementary' | 'dark' | 'light' | 'grey'. These correspond to sass variables"
      })
    }

    if (Array.isArray(children)) {
      children.forEach(child => {
        if (child.type.name !== "Card") {
          errors.push({
            type: "INVALID CHLID ELEMENT",
            source: "CardBlock > props.children",
            message: "Card blocks should only render 'Card' elements, you have tried to render a different component"
          })
        }
      })
    }
    else {
      if (children.type.name !== "Card") {
        errors.push({
          type: "INVALID CHLID ELEMENT",
          source: "CardBlock > props.children",
          message: "Card blocks should only render 'Card' elements, you have tried to render a different component"
        })
      }
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  const classes = [
    "card-block",
    `card-block--bg-${backgroundColor}`,
    !!rowContains ? `card-block--row-${rowContains}` : '',
    ...additionalClasses
  ]
  return validateBlock(backgroundColor, children).length > 0 ? null : (
    <section className={`${classes.join(" ")}`}>
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
  backgroundColor: "grey",
}

export default CardBlock
