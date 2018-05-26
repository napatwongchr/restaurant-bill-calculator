import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const SuccessReserve = () => {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Headings className='mt-5'>Success Reservation !</Headings>
        </Col>
      </Row>
    </Container>
  )
}

const Headings = styled.h1`
  font-size: 56px
`

export default SuccessReserve
