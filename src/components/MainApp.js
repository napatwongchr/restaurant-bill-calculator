import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchTable } from '../actions/Table'
import { fetchCodes } from '../actions/Codes'
import { selectRole } from '../actions/Auth'
import RoleCard from './common/RoleCard'

class MainApp extends Component {
  componentWillMount() {
    this.props.fetchTable()
    this.props.fetchCodes()
  }

  render() {
    const { history } = this.props
    return (
      <ContainerWrapper fluid className='d-flex flex-column'>
        <Row className='mx-auto my-5'>
          <Col>
            <SelectRoleHeading>SELECT ROLE</SelectRoleHeading>
          </Col>
        </Row>
        <CardContainer className='my-5'>
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
        </CardContainer>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  background-color: #f9bc02;
  height: 100vh;
`

const CardContainer = styled(Row)`
  height: 75%;
`

const SelectRoleHeading = styled.h1`
  font-size: 70px;
  font-weight: bolder;
`

export default connect(null, { selectRole, fetchTable, fetchCodes })(MainApp)
