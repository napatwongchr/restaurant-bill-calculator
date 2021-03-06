import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

import menus from 'data/SidebarMenus'

const SideBar = () => {
  return (
    <SideBarWrapper md="2">
      <div className="sticky-top pt-3">
        <MenuWrapper>
          {menus.map(menu => (
            <MenuLink key={menu.title} to={menu.url}>
              <i className="material-icons pr-2">{menu.icon}</i>
              <span>{menu.title}</span>
            </MenuLink>
          ))}
        </MenuWrapper>
      </div>
    </SideBarWrapper>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  color: #000;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`

const SideBarWrapper = styled(Col)`
  background-color: #f9bc02;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`

export default SideBar
