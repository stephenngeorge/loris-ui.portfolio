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
  backgroundColor,
  borderColor,
  cardHeading,
  cardSubHeading,
  children
}) => {
  const validateCard = (backgroundColor, borderColor) => {
    let errors = []

    if (["main", "secondary", "complementary", "light", "dark"].indexOf(backgroundColor) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Card > props.backgroundColor",
        message: "backgroundColor must be one of 'main' | 'secondary' | 'complementary' | 'light' | 'dark'. These correspond to sass variables"
      })
    }

    if (["main", "secondary", "complementary", "light", "dark"].indexOf(borderColor) < 0) {
      errors.push({
        type: "VALUE OUT OF RANGE",
        source: "Card > props.backgroundColor",
        message: "backgroundColor must be one of 'main' | 'secondary' | 'complementary' | 'light' | 'dark'. These correspond to sass variables"
      })
    }

    for (const error of errors) {
      console.warn(`${error.type}: ${error.source}\n${error.message}`)
    }

    return errors
  }

  const classes = [
    "card",
    `card-background--${backgroundColor}`,
    `card-border--${borderColor}`,
    ...additionalClasses
  ]
  return validateCard(backgroundColor, borderColor).length > 0 ? null : (
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
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  cardHeading: PropTypes.string,
  cardSubHeading: PropTypes.string
}

Card.defaultProps = {
  additionalClasses: [],
  backgroundColor: "light",
  borderColor: "secondary"
}

export default Card
