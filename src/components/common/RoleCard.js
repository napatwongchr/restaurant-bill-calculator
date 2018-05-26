import React from 'react'
import PropTypes from 'prop-types'

const RoleCard = ({ onClick, text }) => {
  return (
    <div onClick={onClick} className='card'>
      <div className='card-body d-flex justify-content-center'>
        { text }
      </div>
    </div>
  )
}

RoleCard.defaultProps = {
  onClick: () => {}
}

RoleCard.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default RoleCard
