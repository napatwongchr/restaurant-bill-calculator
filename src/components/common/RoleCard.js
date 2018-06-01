import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RoleCard = ({ onClick, text, icon }) => {
  return (
    <RoleCardWrapper onClick={onClick} className='card'>
      <RoleCardContent className='card-body'>
        <RoleIcon className='material-icons'>
          {icon}
        </RoleIcon>
        <RoleText>{ text }</RoleText>
      </RoleCardContent>
    </RoleCardWrapper>
  )
}

const RoleCardWrapper = styled.div`
  width: 300px;
  margin: 0px 50px;
  padding: 50px;
  background-color: #fff;
  border: 0px solid #000;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: translate(0, -3px)
  }
`

const RoleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RoleText = styled.h2`
  color: #000;
  font-weight: bold;
`

const RoleIcon = styled.i`
  color: #000;
  font-size: 100px;
  padding: 5px;
`

RoleCard.defaultProps = {
  text: 'MENU NAME',
  onClick: () => {}
}

RoleCard.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default RoleCard
