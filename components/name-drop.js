import React from 'react'
import PropTypes from 'prop-types'
import { useFetchUser } from '../lib/user'

const NameDrop = ({ prefix, suffix }) => {
  const { user, loading } = useFetchUser({ required: true })
  if (loading) {
    return <span />
  }

  return (
    <span>
      {prefix}
      <span style={{ textTransform: 'capitalize' }}>{user.nickname}</span>
      {suffix}
    </span>
  )
}

NameDrop.propTypes = {
  prefix: PropTypes.string,
  suffix: PropTypes.string,
}

NameDrop.defaultProps = {
  prefix: '',
  suffix: '',
}

export default NameDrop
