/**
 * ----------
 * TEXT SECTION
 * ----------
 * 
 * Text Section components comprise a title (whcih defaults to <h2>)
 * and RichText, rendering the TextSection's children within the
 * rich-text styled div.
 * Both components within Text Section are optional and will not generate
 * any markup if their respective props are empty or undefined.
 */

import React from "react"
import PropTypes from "prop-types"

import { RichText, Title } from '../../01-atoms'

const TextSection = ({
  additionalClasses,
  children,
  titleLevel,
  titleText,
  underlineColor
}) => {
  const classes = ["text-section", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      {
        !!titleText &&
        <Title  titleLevel={ titleLevel }
                titleText={ titleText }
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
