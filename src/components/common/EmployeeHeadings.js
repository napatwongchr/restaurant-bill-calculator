import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

const EmployeeHeadings = ({ mainHeadings, subHeadings }) => {
  return (
    <HeadingsArea>
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <MainHeadings>{ mainHeadings }</MainHeadings>
        <SubHeadings>{ subHeadings }</SubHeadings>
      </Col>
    </HeadingsArea>
  )
}

const HeadingsArea = styled(Row)`
  height: 300px;
  background-color: #f9bc02;
  border-radius: 0 0 50px 50px;
`

const MainHeadings = styled.h1`
  font-size: 56px;
  font-weight: bolder;
`

const SubHeadings = styled.h5`

`

export default EmployeeHeadings
