import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RoleCard = ({ onClick, text, icon }) => {
  return (
    <RoleCardWrapper onClick={onClick} className='card'>
      <div className='card-body d-flex flex-column justify-content-center align-items-center'>
        <RoleIcon className='material-icons'>
          {icon}
        </RoleIcon>
        <Role>{ text }</Role>
      </div>
    </RoleCardWrapper>
  )
}

const RoleCardWrapper = styled.div`
  height: 85%;
  background-color: #f9bc02;
  border: 10px solid #000;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    transform: translate(0, -3px)
  }
`
const Role = styled.h2`
  color: #000;
  font-weight: bold;
`

const RoleIcon = styled.i`
  color: #000;
  font-size: 150px;
`

RoleCard.defaultProps = {
  onClick: () => {}
}

RoleCard.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default RoleCard
