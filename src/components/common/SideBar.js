import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

const SideBar = () => {
  return (
    <Col id='sticky-sidebar' className='bg-dark' md='2'>
      <div className='py-2 sticky-top'>
          <div className='nav flex-column'>
              <Link to='/admin'>Dashboard</Link>
              <Link to='/admin/promotion'>Promotion code</Link>
          </div>
      </div>
    </Col>
  )
}

SideBar.defaultProps = {

}

SideBar.propTypes = {

}

export default SideBar
