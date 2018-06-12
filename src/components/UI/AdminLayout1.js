import React from 'react'
import PropTypes from 'prop-types'
import SideBar from '../common/SideBar'
import AdminContent from '../common/AdminContent'
import { Container, Row } from 'reactstrap'

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
