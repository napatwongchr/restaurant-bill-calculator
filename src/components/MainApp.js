import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { selectRole } from '../actions/Auth'
import RoleCard from './common/RoleCard'

class MainApp extends Component {
  render() {
    const { history } = this.props
    return (
      <ContainerWrapper fluid className='d-flex flex-column'>
        <Row className='mx-auto my-5'>
          <Col>
            <SelectRoleHeading>Select Role</SelectRoleHeading>
          </Col>
        </Row>
        <Row className='my-5 h-75'>
          <Col>
            <RoleCard
              onClick={() => history.push('/customer')}
              icon='store_mall_directory'
              text='CUSTOMER'/>
          </Col>
          <Col>
            <RoleCard
              onClick={() => history.push('/employee')}
              icon='restaurant_menu'
              text='EMPLOYEE'/>
          </Col>
          <Col>
            <RoleCard
              onClick={() => history.push('/admin')}
              icon='settings'
              text='ADMIN'/>
          </Col>
        </Row>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  background-color: #f9bc02;
  height: 100vh;
`

const SelectRoleHeading = styled.h1`
  font-size: 70px;
`

export default connect(null, { selectRole })(MainApp)
