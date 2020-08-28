import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ name, label, required, onChange, value }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      id={name}
      name={name}
      required={required}
      onChange={onChange}
      value={value}
    />
  </>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

Input.defaultProps = {
  required: false,
  onChange: undefined,
  value: '',
}

export default Input
