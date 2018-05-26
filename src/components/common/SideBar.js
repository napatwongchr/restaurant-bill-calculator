import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

const SideBar = () => {
  return (
    <Col id='sticky-sidebar' className='bg-dark' md='2'>
      <div className='sticky-top'>
        <div className='sidebar-headings'>
          Menu
        </div>
         <div className='sidebar-menu'>
           <Link to='/admin/promotion'>Promotion Code</Link>
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
