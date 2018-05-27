import React from 'react'
import styled from 'styled-components'
import WrappedButton from '../common/WrappedButton'
import { Row, Col, Table,
Input } from 'reactstrap'

const EmployeeBill = ({ modalToggle }) => {
  return (
    <BillSummary md='6'>
      <BillHeadings modalToggle={modalToggle}/>
      <BillDetail />
      <BillItemDetail />
      <BillCodes />
      <BillPrice />
      <BillActions />
    </BillSummary>
  )
}

const BillCodes = () => {
  return (
    <Row className='my-3'>
      <Col>
        <h4>You have apply</h4>
        <h5>Code: 3PAY4</h5>
      </Col>
    </Row>
  )
}

const BillHeadings = ({modalToggle}) => {
  return (
    <Row>
      <Col className='d-flex'>
        <i className='material-icons mr-2'>restaurant_menu</i>
        <h4>360 RESTAURANT</h4>
      </Col>
      <Col className='d-flex justify-content-end'>
        <WrappedButton
          onClick={modalToggle}
          iconName='card_giftcard'
          textcolor='#FFFFFF'
          color='#9e9e9e'
          size='sm'
          text='APPLY CODE' />
      </Col>
    </Row>
  )
}

const BillDetail = () => {
  return (
    <Row className='my-3'>
      <Col>
        <span style={{display: 'block'}}>INVOICE: 1213232424</span>
        <span>DATE: 12/02/2018</span>
      </Col>
    </Row>
  )
}

const BillItemDetail = () => {
  return (
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
  )
}

const BillPrice = () => {
  return (
    <div>
      <Row className='mt-3 d-flex justify-content-end'>
        <Col className='d-flex' md='6'>
          <SummaryText>Recieve:</SummaryText>
          <Input className='ml-2' bsSize='sm'/>
        </Col>
      </Row>
      <Row className='my-3 d-flex justify-content-end'>
        <Col className='text-right' md='6'>
          <SummaryText>TOTAL: 1000 BAHT</SummaryText>
        </Col>
      </Row>
    </div>

  )
}


const BillActions = () => {
  return (
    <Row>
      <Col className='d-flex justify-content-end'>
        <WrappedButton
          iconName='send'
          color='#f9bc02'
          size='lg'
          text='CHECKOUT' />
      </Col>
    </Row>
  )
}

const SummaryText = styled.span`
  font-size: 20px;
`

const BillSummary = styled(Col)`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 30px;
`


export default EmployeeBill
