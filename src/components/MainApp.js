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
      <ContainerWrapper className='d-flex flex-column'>
        <Row className='mx-auto my-5'>
          <SelectRoleHeading>Select Role</SelectRoleHeading>
        </Row>
        <Row className='my-5'>
          <Col>
            <RoleCard onClick={() => history.push('/customer')} text='CUSTOMER'/>
          </Col>
          <Col>
            <RoleCard onClick={() => history.push('/employee')} text='EMPLOYEE'/>
          </Col>
          <Col>
            <RoleCard onClick={() => history.push('/admin')} text='ADMIN'/>
          </Col>
        </Row>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  height: 100vh;
`

const SelectRoleHeading = styled.h1`
  font-size: 70px;
`

export default connect(null, { selectRole })(MainApp)
