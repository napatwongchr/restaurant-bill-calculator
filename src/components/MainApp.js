import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchTable } from '../actions/Table'
import { fetchCodes } from '../actions/Codes'
import RoleCard from './common/RoleCard'

class MainApp extends Component {
  componentDidMount() {
    this.props.fetchTable()
    this.props.fetchCodes()
  }

  render() {
    const { history } = this.props
    return (
      <ContainerWrapper fluid>
        <Row>
          <HeadingWrapper>
            <SelectRoleHeading>SELECT ROLE</SelectRoleHeading>
          </HeadingWrapper>
        </Row>
        <Row className='h-50'>
          <RoleCardWrapper>
            <RoleCard
              onClick={() => history.push('/customer')}
              icon='store_mall_directory'
              text='CUSTOMER'/>
            <RoleCard
              onClick={() => history.push('/employee')}
              icon='restaurant_menu'
              text='EMPLOYEE'/>
            <RoleCard
              onClick={() => history.push('/admin')}
              icon='settings'
              text='ADMIN'/>
          </RoleCardWrapper>
        </Row>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  background-color: #f9bc02;
  min-height: 100vh;
`

const RoleCardWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeadingWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  margin: 70px 0px;
`

const SelectRoleHeading = styled.h1`
  font-size: 70px;
  font-weight: bolder;
`

export default connect(null, { fetchTable, fetchCodes })(MainApp)
