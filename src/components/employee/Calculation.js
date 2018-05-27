import React, { Component } from 'react'
import styled from 'styled-components'
import EmployeeHeadings from '../common/EmployeeHeadings'
import EmployeeContent from '../common/EmployeeContent'
import EmployeeBill from '../common/EmployeeBill'

import { Container, Row, Col,
Input, Button, Table } from 'reactstrap'

class Calculation extends Component {
  render() {
    return (
      <ContainerWrapper fluid>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings='Summary for table #123'/>
        <EmployeeContent classname='d-flex justify-content-center'>
          <EmployeeBill />
        </EmployeeContent>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`
export default Calculation
