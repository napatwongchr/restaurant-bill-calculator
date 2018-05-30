import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const ShortcutMenu = ({ shortCutMenuToggle, onMouseEnter, onMouseLeave }) => {
  return (
    <ShortcutMenuWrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      { shortCutMenuToggle
        ? <div>
            <MenuLink to='/employee'>Employee</MenuLink>
            <MenuLink to='/customer'>Customer</MenuLink>
            <MenuLink to='/admin'>Admin</MenuLink>
          </div>
        : <i className='material-icons'>menu</i> }
    </ShortcutMenuWrapper>
  )
}


const expandMenuBox = keyframes`
  from {
    width: 50px;
    border-radius: 20px;
  }
  to {
    width: 300px;
    border-radius: 20px;
  }
`

const linkFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const textPop = keyframes`
  from {
    font-size: 1em;
  }
  to {
    font-size: 1.3em;
  }
`

const MenuLink = styled(Link)`
  animation: ${linkFadeIn} 1.5s;
  margin: 0px 8px;
  color: #fff;
  &:hover {
    color:#F9BC02;
    text-decoration: none;
    animation: ${textPop} 0.3s forwards;
  }
`

const ShortcutMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #fff;
  background-color: #000;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  transition: width 0.5s;
  &:hover {
    animation: ${expandMenuBox} 0.25s both;
  }
`


export default ShortcutMenu
