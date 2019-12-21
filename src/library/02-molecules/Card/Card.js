/**
 * ----------
 * CARD
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

import { Heading, RichText } from '../../01-atoms'

const Card = ({
  additionalClasses,
  borderColor,
  cardHeading,
  cardSubHeading,
  children
}) => {
  const classes = [
    "card",
    `card-border--${borderColor}`,
    ...additionalClasses
  ]
  return (
    <div className={`${classes.join(" ")}`}>
      {
        !!cardHeading &&
        <Heading>
          <h3 className="card__header--heading">{ cardHeading }</h3>
          {
            !!cardSubHeading &&
            <h4 className="card__heading--subheading">{ cardSubHeading }</h4>
          }
        </Heading>
      }
      <RichText>
        { children }
      </RichText>
    </div>
  )
}

Card.propTypes = {
  additionalClasses: PropTypes.array,
  borderColor: PropTypes.string,
  cardHeading: PropTypes.string,
  cardSubHeading: PropTypes.string
}

Card.defaultProps = {
  additionalClasses: [],
  borderColor: "secondary"
}

export default Card
