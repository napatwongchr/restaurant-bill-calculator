import React from 'react'
import styled from 'styled-components'
import WrappedButton from '../common/WrappedButton'
import { Row, Col, Table,
Input } from 'reactstrap'

const EmployeeBill = ({ singleTable, billTotal, appliedCode,
  subTotal, exchange, modalToggle,
  handleExchange, handleRemoveCode, selectedCode,
  removeCodeFromBill, history }) => {
    console.log()
  const reservation = singleTable.people
  return (
    <BillSummary md='6'>
      { reservation
        ? <div>
            <BillHeadings
              reservation={reservation}
              modalToggle={modalToggle} />
            <BillDetail
              peopleNumber={singleTable.people} />
            <BillItemDetail
              items={singleTable.items} />
            <BillCodes
              selectedCode={selectedCode}
              handleRemoveCode={handleRemoveCode}
              appliedCode={appliedCode} />
            <BillPrice
              handleExchange={handleExchange}
              exchange={exchange}
              billTotal={billTotal}
              subTotal={subTotal} />
            <BillActions
              handleRemoveCode={handleRemoveCode}
              history={history} />
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

const BillCodes = ({ appliedCode, handleRemoveCode, selectedCode }) => {
  return (
    <Row className='my-3'>
      <Col md='6'>
        <HeadingWrapper>
          <i className='material-icons mr-2'>card_giftcard</i>
          <h4>System has applied</h4>
        </HeadingWrapper>
        { appliedCode
          ? <div>
            <WrappedButton
              className='mt-2'
              onRight
              onClick={handleRemoveCode}
              iconName='clear'
              textcolor='#fff'
              color='#ef405a'
              size='sm'
              text={appliedCode} />
              { selectedCode && <h6 className='my-2'>
                {`You have selected "${selectedCode}" but system has detected the best
                discount code (${appliedCode}) for you.`}
              </h6> }
            </div>
          : 'No code'
        }
      </Col>
    </Row>
  )
}

const HeadingWrapper = styled.div`
  display: flex;
`

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

const BillDetail = ({ peopleNumber }) => {
  return <Row className='my-3'>
            <BillDetailWrapper>
              <BillDetailText color='#a0a0a0'>
                INVOICE: 123123123
              </BillDetailText>
              <BillDetailText color='#a0a0a0'>
                DATE: 12/02/2030
              </BillDetailText>
              <BillDetailText>
                PEOPLE NUMBER: { peopleNumber }
              </BillDetailText>
            </BillDetailWrapper>
          </Row>
}

const BillDetailWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
`

const BillDetailText = styled.span`
  color: ${ props => props.color || '#000' }
`

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

const BillActions = ({ handleRemoveCode, history }) => {
  return <Row>
            <Col className='d-flex justify-content-between'>
              <WrappedButton
                onClick={() => {
                  handleRemoveCode()
                  history.push('/employee')
                }}
                iconName='keyboard_backspace'
                color='#bfbfbf'
                size='lg'
                text='BACK' />
              <WrappedButton
                onClick={() => alert('Chekout the table !')}
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
