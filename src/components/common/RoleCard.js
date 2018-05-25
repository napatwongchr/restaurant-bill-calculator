import React from 'react'
import { Card, CardBody } from 'reactstrap'

const RoleCard = ({ onClick, text }) => {
  return (
    <div onClick={onClick} className='card'>
      <div className='card-body d-flex justify-content-center'>
        { text }
      </div>
    </div>
  )
}

export default RoleCard
