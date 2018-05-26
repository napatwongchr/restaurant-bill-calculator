import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SideBar from '../common/SideBar'
import AdminContent from '../common/AdminContent'
import { Container, Row } from 'reactstrap'

const AdminLayout1 = ({ headings, children }) => {
  return (
    <ContainerWrapper fluid>
      <Row className='h-100'>
        <SideBar />
        <AdminContent headings={headings}>
          { children }
        </AdminContent>
      </Row>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled(Container)`
  height: 100vh
`

AdminLayout1.propTypes ={
  headings: PropTypes.string,
  children: PropTypes.element
}

export default AdminLayout1
