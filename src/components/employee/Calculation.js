import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col,
Input, Button } from 'reactstrap'

class Calculation extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className='d-flex justify-content-center'>
            <BillHeadings className='mt-5'>Bill Summary</BillHeadings>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md='3'></Col>
          <Col md='6' className='d-flex flex-column align-items-center'>
            <h2>Table Id #123</h2>
            <Button onClick={() => alert('Checked !!') } className='mt-4'>
              Checkout
            </Button>
          </Col>
          <Col md='3'></Col>
        </Row>
      </Container>
    )
  }
}

const BillHeadings = styled.h1`
  font-size: 56px
`

export default Calculation
