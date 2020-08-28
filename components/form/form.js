import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ method, onChange, children }) => (
  <form method={method} onChange={onChange}>
    {children}
  </form>
)

Form.propTypes = {
  method: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

Form.defaultProps = {
  method: 'post',
}

export default Form
