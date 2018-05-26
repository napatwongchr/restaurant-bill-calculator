import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col,
Input, Button, InputGroup,
InputGroupText, InputGroupAddon } from 'reactstrap'

class ReserveSeats extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 })
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { history } = this.props
    return (
      <Container>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Headings className='mt-5'>How many people you want to reserve ?</Headings>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md='3'></Col>
          <Col md='6' className='d-flex flex-column align-items-center'>
            <InputGroup size='lg'>
              <InputGroupAddon addonType='prepend'>
                <Button onClick={this.decreaseCount} color='secondary'>-</Button>
              </InputGroupAddon>
              <Input value={this.state.count} placeholder='Seats' />
              <InputGroupAddon addonType='append'>
                <Button onClick={this.increaseCount} color='secondary'>+</Button>
              </InputGroupAddon>
            </InputGroup>
            <Button
              onClick={() => history.push('/customer/success')}
              color='primary'
              size='lg'
              className='mt-5'>
                Submit
            </Button>
          </Col>
          <Col md='3'></Col>
        </Row>
      </Container>
    )
  }
}

const Headings = styled.h1`
  font-size: 56px
`

export default ReserveSeats
