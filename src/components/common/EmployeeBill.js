import React from 'react'
import styled from 'styled-components'
import WrappedButton from '../common/WrappedButton'
import { Row, Col, Table,
Input } from 'reactstrap'

const EmployeeBill = ({ table, billTotal, codes,
  subTotal, exchange, modalToggle,
  handleRecieveInput, handleRemoveCode }) => {
  return (
    <BillSummary md='6'>
      <BillHeadings modalToggle={modalToggle}/>
      <BillDetail />
      <BillItemDetail items={table.items}/>
      <BillCodes
        handleRemoveCode={handleRemoveCode}
        codes={codes}/>
      <BillPrice
        handleRecieveInput={handleRecieveInput}
        exchange={exchange}
        billTotal={billTotal}
        subTotal={subTotal}/>
      <BillActions />
    </BillSummary>
  )
}

export default EmployeeBill

const BillCodes = ({codes, handleRemoveCode}) => {
  return (
    <Row className='my-3'>
      <Col>
        <h4>You have apply</h4>
        { codes
          ? (<Row>
              <Col className='d-flex align-items-center'>
                <h5 className='mr-2'>{codes}</h5>
                <WrappedButton
                  onClick={handleRemoveCode}
                  iconName='clear'
                  color='#ef405a'
                  size='sm'
                  text='' />
              </Col>
            </Row>)
          : 'No code'
        }
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
          color='#407fed'
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
        <span style={{display: 'block'}}>INVOICE: {Math.floor(Math.random(1) * 1000000)}</span>
        <span>DATE: {Date.now()}</span>
      </Col>
    </Row>
  )
}

const BillItemDetail = ({items}) => {
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
            {items.map((item, index) => <tr key={index} align='center'>
              <th scope='row'>{ index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>)}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

const BillPrice = ({billTotal, subTotal, handleRecieveInput, exchange}) => {
  return (
    <div>
      <Row className='mt-3 d-flex justify-content-end'>
        <Col className='d-flex' md='6'>
          <SummaryText>Recieve:</SummaryText>
          <Input
            onChange={handleRecieveInput}
            type='number'
            placeholder='MONEY YOU RECIEVE'
            className='ml-2'
            bsSize='sm'/>
        </Col>
      </Row>
      <Row className='my-3 d-flex justify-content-end'>
        <Col className='d-flex flex-column align-items-end' md='6'>
          <SummaryText color='#a0a0a0'>SUB TOTAL: {subTotal} BAHT</SummaryText>
          <SummaryText>TOTAL: {billTotal} BAHT</SummaryText>
          <SummaryText>EXCHANGE: {exchange} BAHT</SummaryText>
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
  color: ${props => props.color || '#000'}
  font-size: 20px;
`

const BillSummary = styled(Col)`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 30px;
`
