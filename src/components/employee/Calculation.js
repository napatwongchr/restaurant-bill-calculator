import React, { Component } from 'react'
import styled from 'styled-components'
import EmployeeHeadings from '../common/EmployeeHeadings'
import EmployeeContent from '../common/EmployeeContent'
import WrappedButton from '../common/WrappedButton'
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
          <BillSummary md='6'>
            <Row>
              <Col className='d-flex'>
                <i className='material-icons mr-2'>restaurant_menu</i>
                <h4>360 RESTAURANT</h4>
              </Col>
              <Col className='d-flex justify-content-end'>
                <WrappedButton
                  iconName='card_giftcard'
                  textColor='#FFFFFF'
                  color='#9e9e9e'
                  size='sm'
                  text='APPLY CODE' />
              </Col>
            </Row>
            <Row className='my-3'>
              <Col>
                <span style={{display: 'block'}}>INVOICE: 1213232424</span>
                <span>DATE: 12/02/2018</span>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col>
                <Table borderless>
                  <thead>
                    <tr align='center'>
                      <th>#</th>
                      <th>LIST</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr align='center'>
                      <th scope='row'>1</th>
                      <td>Buffet</td>
                      <td>420</td>
                      <td>2</td>
                      <td>1,000</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col className='text-right'>
                <span>TOTAL: 1000 BAHT</span>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-end'>
                <WrappedButton
                  iconName='send'
                  color='#f9bc02'
                  size='lg'
                  text='CHECKOUT' />
              </Col>
            </Row>
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
