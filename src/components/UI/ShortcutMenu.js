import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const ShortcutMenu = ({ shortCutMenuToggle, onMouseEnter, onMouseLeave }) => {
  return (
    <ShortcutMenuWrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {shortCutMenuToggle ? (
        <div>
          <MenuLink to="/employee">Employee</MenuLink>
          <MenuLink to="/customer">Customer</MenuLink>
          <MenuLink to="/admin">Admin</MenuLink>
        </div>
      ) : (
        <i className="material-icons">menu</i>
      )}
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

const textPop = keyframes`
  from {
    font-size: 1em;
  }
  to {
    font-size: 1.3em;
  }
`

const MenuLink = styled(Link)`
  margin: 0px 8px;
  color: #fff;
  &:hover {
    color: #f9bc02;
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
  &:hover {
    animation: ${expandMenuBox} 0.25s forwards;
  }
`

ShortcutMenu.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  shortCutMenuToggle: PropTypes.bool.isRequired
}

export default ShortcutMenu
