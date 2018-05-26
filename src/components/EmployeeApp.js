import React from 'react'
import styled from 'styled-components'
import EmployeeHeadings from './common/EmployeeHeadings'
import EmployeeContent from './common/EmployeeContent'
import TableBox from './common/TableBox'
import { Container, Col } from 'reactstrap'

const EmployeeApp = ({ history }) => {
  return (
    <ContainerWrapper fluid>
      <EmployeeHeadings
        mainHeadings='BILL CALCULATOR'
        subHeadings='PLEASE SELECT THE TABLE' />
      <EmployeeContent>
        <Col className='d-flex justify-content-center mx-5'>
          <TableBox onClick={() => history.push('/employee/calculation')} number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
          <TableBox number={1}/>
        </Col>
      </EmployeeContent>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

export default EmployeeApp
