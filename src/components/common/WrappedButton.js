import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const WrappedButton = ({ text, onClick, size, color, textcolor, iconName }) => {
  return (
    <ButtonWrapper
      textcolor={textcolor}
      color={color}
      onClick={onClick}
      size={size}>
      <Icon className='material-icons'>{iconName}</Icon>
      <span>{ text }</span>
    </ButtonWrapper>
  )
}

const Icon = styled.i`
  margin-right: 5px;
`

const ButtonWrapper = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.textcolor || '#000'}
  border-radius: 20px;
  background-color: ${props => props.color};
  &:hover{
    transform: translate(0px, 3px);
  }
`

export default WrappedButton
