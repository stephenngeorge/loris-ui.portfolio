/**
 * ----------
 * BUTTON ROW
 * ----------
 * 
 * Button Row components render up to two buttons
 * on a line, each with their own props.
 * ButtonRow accepts an array of buttons, each button
 * object in the array should contain any props that
 * are accepted by the button atom.
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"

import { LinkButton } from '../../01-atoms'

import { ThemeContext } from '../../00-protons/Themer/Themer'

const ButtonRow = ({
  additionalClasses,
  buttons,
  rowColor,
  scopedStyles
}) => {
  // consume theme and set styles
  const { colors } = useContext(ThemeContext)
  const underlineStyles = {
    borderBottom: `2px solid ${colors[rowColor]}`
  }
  const styles = { ...scopedStyles }

  const classes = ["button-row", ...additionalClasses]
  return (
    <div style={ styles } className={`${classes.join(" ")}`}>
      <ul className="button-row--list">
        {
          buttons.map((button, i) => {
            return (
              <li key={ i }>
                <LinkButton buttonBgColor={ rowColor } buttonBorderColor={ rowColor } buttonB { ...button } />
              </li>
            )
          })
        }
      </ul>

      <div style={ underlineStyles } className="underline"></div>
    </div>
  )
}

ButtonRow.propTypes = {
  additionalClasses: PropTypes.array,
  buttons: PropTypes.array.isRequired,
  rowColor: PropTypes.string,
  scopedStyles: PropTypes.object
}

ButtonRow.defaultProps = {
  additionalClasses: [],
  rowColor: 'main',
  scopedStyles: {}
}

export default ButtonRow
