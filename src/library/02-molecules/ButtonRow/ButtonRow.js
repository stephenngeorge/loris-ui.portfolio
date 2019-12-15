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

import React from "react"
import PropTypes from "prop-types"

import { Button } from '../../01-atoms'

const ButtonRow = ({
  additionalClasses,
  buttons,
  rowColor
}) => {
  const classes = ["button-row", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <ul className="button-row--list">
        {
          buttons.map((button, i) => {
            return <Button key={ i } buttonColor={ rowColor } buttonBorderColor={ rowColor } { ...button } />
          })
        }
      </ul>
    </div>
  )
}

ButtonRow.propTypes = {
  additionalClasses: PropTypes.array,
  buttons: PropTypes.array.isRequired,
  rowColor: PropTypes.string
}

ButtonRow.defaultProps = {
  additionalClasses: [],
  rowColor: 'main'
}

export default ButtonRow
