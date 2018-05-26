import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

const AdminContent = ({ headings, children }) => {
  return (
    <Col className='py-4 px-4'>
      <h2>{ headings }</h2>
      { children }
    </Col>
  )
}

AdminContent.defaultProps = {
  headings: 'Headings'
}

AdminContent.propTypes = {
  headings: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default AdminContent
