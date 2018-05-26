import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col,
Input, Button } from 'reactstrap'

const EmployeeApp = ({ history }) => {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center'>
          <BillHeadings className='mt-5'>Bill Calculator</BillHeadings>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md='3'></Col>
        <Col md='6' className='d-flex flex-column align-items-center'>
          <h2>Enter Table Id</h2>
          <Input className='mt-4' placeholder='Table Id' />
          <Button onClick={() => history.push('/employee/calculation') } className='mt-4'>
            Submit
          </Button>
        </Col>
        <Col md='3'></Col>
      </Row>
    </Container>
  )
}

const BillHeadings = styled.h1`
  font-size: 56px
`

export default EmployeeApp
