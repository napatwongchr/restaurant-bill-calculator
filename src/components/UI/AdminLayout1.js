import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'reactstrap'

import SideBar from '../UI/SideBar'
import AdminContent from '../UI/AdminContent'

const AdminLayout1 = ({ headings, children }) => {
  return (
    <Container fluid>
      <Row>
        <SideBar />
        <AdminContent headings={headings}>
          { children }
        </AdminContent>
      </Row>
    </Container>
  )
}

AdminLayout1.propTypes ={
  headings: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}

export default AdminLayout1
