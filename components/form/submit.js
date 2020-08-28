import React from 'react'
import PropTypes from 'prop-types'

const Submit = ({ value }) => <input type="submit" value={value} />

Submit.propTypes = {
  value: PropTypes.string.isRequired,
}

Submit.defaultProps = {}

export default Submit
