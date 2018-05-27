import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

const SideBar = () => {
  return (
    <SideBarWrapper md='2'>
      <div className='py-2 sticky-top'>
          <div className='nav flex-column'>
              <MenuLink to='/admin'>Dashboard</MenuLink>
              <MenuLink to='/admin/promotion'>Promotion code</MenuLink>
          </div>
      </div>
    </SideBarWrapper>
  )
}

const MenuLink = styled(Link)`
  color: #000;
`

const SideBarWrapper = styled(Col)`
  background-color: #f9bc02;
  min-height: 100vh;
`

SideBar.defaultProps = {

}

SideBar.propTypes = {

}

export default SideBar
