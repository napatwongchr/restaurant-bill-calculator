import React from 'react'
import styled from 'styled-components'
import WrappedButton from '../common/WrappedButton'
import { Row, Col, Table,
Input } from 'reactstrap'

const EmployeeBill = ({ table, billTotal, appliedCode,
  subTotal, exchange, modalToggle,
  handleExchange, handleRemoveCode, history }) => {

  const reservation = table.people

  return (
    <BillSummary md='6'>
      { reservation
        ? <div>
            <BillHeadings
              reservation={reservation}
              modalToggle={modalToggle} />
            <BillDetail />
            <BillItemDetail
              items={table.items} />
            <BillCodes
              handleRemoveCode={handleRemoveCode}
              appliedCode={appliedCode} />
            <BillPrice
              handleExchange={handleExchange}
              exchange={exchange}
              billTotal={billTotal}
              subTotal={subTotal} />
            <BillActions />
          </div>
        : <div>
            <BillHeadings reservation={reservation} modalToggle={modalToggle}/>
            <NoReservationContent history={history}/>
          </div> }
    </BillSummary>
  )
}

const BillSummary = styled(Col)`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 30px;
`

export default EmployeeBill

const BillCodes = ({ appliedCode, handleRemoveCode }) => {
  return (
    <Row className='my-3'>
      <Col>
        <h4>You have apply</h4>
        { appliedCode
          ? <Row>
              <Col className='d-flex align-items-center'>
                <WrappedButton
                  onRight
                  onClick={handleRemoveCode}
                  iconName='clear'
                  textcolor='#fff'
                  color='#ef405a'
                  size='sm'
                  text={appliedCode} />
              </Col>
            </Row>
          : 'No code'
        }
      </Col>
    </Row>
  )
}

const BillHeadings = ({ reservation, modalToggle }) => {
  return (
    <Row>
      <Col className='d-flex'>
        <i className='material-icons mr-2'>restaurant_menu</i>
        <h4>063 RESTAURANT</h4>
      </Col>
      { reservation
        ? <Col className='d-flex justify-content-end'>
            <WrappedButton
              onClick={modalToggle}
              iconName='card_giftcard'
              textcolor='#FFFFFF'
              color='#407fed'
              size='sm'
              text='APPLY CODE' />
          </Col>
        : null }
    </Row>
  )
}

const BillDetail = () => {
  return <Row className='my-3'>
            <Col>
              <span style={{ display: 'block' }}>
                INVOICE: { Math.floor(Math.random(1) * 1000000) }
              </span>
              <span>
                DATE: { Date.now() }
              </span>
            </Col>
          </Row>
}

const BillItemDetail = ({ items }) => {
  return <Row className='my-3'>
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
                  {items.map((item, index) => <tr key={ index } align='center'>
                    <th scope='row'>{ index + 1}</th>
                    <td>{ item.name }</td>
                    <td>{ item.price }</td>
                    <td>{ item.quantity }</td>
                    <td>{ item.price * item.quantity }</td>
                  </tr>)}
                </tbody>
              </Table>
            </Col>
          </Row>
}

const BillPrice = ({ billTotal, subTotal, handleExchange, exchange }) => {
  return <div>
          <Row className='mt-3 d-flex justify-content-end'>
            <Col className='d-flex' md='6'>
              <SummaryText>Recieve:</SummaryText>
              <Input
                onChange={ handleExchange }
                type='number'
                placeholder='MONEY YOU RECIEVE'
                className='ml-2'
                bsSize='sm'/>
            </Col>
          </Row>
          <Row className='my-3 d-flex justify-content-end'>
            <Col className='d-flex flex-column align-items-end' md='6'>
              <SummaryText color='#a0a0a0'>
                SUB TOTAL: { parseFloat(subTotal).toFixed(2) } BAHT
              </SummaryText>
              <SummaryText>
                TOTAL: { parseFloat(billTotal).toFixed(2) } BAHT
              </SummaryText>
              <SummaryText>
                EXCHANGE: { parseFloat(exchange).toFixed(2) } BAHT
              </SummaryText>
            </Col>
          </Row>
        </div>
}

const SummaryText = styled.span`
  color: ${ props => props.color || '#000' }
  font-size: 20px;
`

const BillActions = () => {
  return <Row>
            <Col className='d-flex justify-content-end'>
              <WrappedButton
                iconName='send'
                color='#f9bc02'
                size='lg'
                text='CHECKOUT' />
            </Col>
          </Row>
}

const NoReservationContent = ({ history }) => {
  return <Row>
            <NoReservationContentWrapper>
              <h2 className='text-center py-4'>No reservation</h2>
              <WrappedButton
                textcolor='#000'
                color='#f9bc02'
                size='lg'
                onClick={() => history.push('/employee')}
                iconName='keyboard_backspace'
                text='BACK' />
            </NoReservationContentWrapper>
          </Row>
}

const NoReservationContentWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
`
