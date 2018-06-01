import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

class ReserveSeats extends Component {
  render() {
    return (
      <ContainerWrapper fluid>
        <HeadingsRowWrapper>
          <HeadingsWrapper>
            <Headings>Soon...</Headings>
          </HeadingsWrapper>
        </HeadingsRowWrapper>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  background-color: #f9bc02;
  height: 100vh;
`

const HeadingsRowWrapper = styled(Row)`
  height: 100%;
`

const HeadingsWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Headings = styled.h1`
  font-size: 100px
`

export default ReserveSeats
