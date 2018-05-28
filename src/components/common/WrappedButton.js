import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const WrappedButton = ({ text, onClick, size, color, textcolor, iconName, onRight }) => {
  return (
    <ButtonWrapper
      textcolor={textcolor}
      color={color}
      onClick={onClick}
      size={size}>
      { onRight ? iconOnRight(text, iconName) : iconOnLeft(text, iconName) }
    </ButtonWrapper>
  )
}

const iconOnRight = (text, iconName) => {
  return <ButtonContentWrapper>
            <span>{ text }</span>
            <IconRight className='material-icons'>{iconName}</IconRight>
          </ButtonContentWrapper>
}

const iconOnLeft = (text, iconName) => {
  return <ButtonContentWrapper>
            <IconLeft className='material-icons'>{iconName}</IconLeft>
            <span>{ text }</span>
          </ButtonContentWrapper>
}

const IconLeft = styled.i`
  margin-right: 5px;
`

const IconRight = styled.i`
  margin-left: 5px;
`

const ButtonWrapper = styled(Button)`
  color: ${ props => props.textcolor || '#000' }
  border-radius: 20px;
  background-color: ${ props => props.color };
  &:hover{
    transform: translate(0px, 3px);
  }
`

const ButtonContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

WrappedButton.defaultProps = {
  onRight: false,
  onClick: () => {}
}

WrappedButton.propTypes = {
  onRight: PropTypes.bool,
  iconName: PropTypes.string,
  text: PropTypes.string,
  textcolor: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default WrappedButton
