import React from "react"
import PropTypes from "prop-types"

import { RichText, Title } from '../../01-atoms'

const TextSection = ({
  additionalClasses,
  children,
  headingLevel,
  headingText,
  underlineColor
}) => {
  const classes = ["text-section", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      {
        !!headingText &&
        <Title  headingLevel={ headingLevel }
                headingText={ headingText }
                underlineColor={ underlineColor }
        />
      }
      {
        !!children &&
        <RichText>
          { children }
        </RichText>
      }
    </section>
  )
}

TextSection.propTypes = {
  additionalClasses: PropTypes.array,
  headingLevel: PropTypes.number,
  headingText: PropTypes.string,
  underlineColor: PropTypes.string
}

TextSection.defaultProps = {
  additionalClasses: [],
  headingLevel: 2
}

export default TextSection
