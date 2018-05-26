import React, { Component } from 'react'
import styled from 'styled-components'
import EmployeeHeadings from '../common/EmployeeHeadings'
import EmployeeContent from '../common/EmployeeContent'
import { Container, Row, Col,
Input, Button } from 'reactstrap'

class Calculation extends Component {
  render() {
    return (
      <ContainerWrapper fluid>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings='Summary for table #123'/>
        <EmployeeContent classname='d-flex justify-content-center'>
          <BillSummary md='6'>

              <h4>adsfdsafasdfasdfasfd</h4>
              <h4>adsfdsafasdfasdfasfd</h4>
              <h4>adsfdsafasdfasdfasfd</h4>
              <h4>adsfdsafasdfasdfasfd</h4>
              <h4>adsfdsafasdfasdfasfd</h4>
              <span>asdsadasdasdasd</span>
          </BillSummary>
        </EmployeeContent>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const BillSummary = styled(Col)`
  width: 100%;
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 30px;
`

export default Calculation
