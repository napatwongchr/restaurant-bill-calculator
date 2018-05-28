import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

const SideBar = () => {
  return (
    <SideBarWrapper md='2'>
      <div className='sticky-top pt-3'>
          <MenuWrapper>
              <MenuLink to='/admin'>
                <i className='material-icons pr-2'>dashboard</i>
                <span>Dashboard</span>
              </MenuLink>
              <MenuLink to='/admin/promotion'>
                <i className='material-icons pr-2'>card_giftcard</i>
                <span>Discount codes</span>
              </MenuLink>
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
    color: #FFF;
  }
`

const SideBarWrapper = styled(Col)`
  background-color: #f9bc02;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`

export default SideBar
