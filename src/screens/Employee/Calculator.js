import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import EmployeeCalculator from '../../components/Employee/Calculator'
import EmployeeHeading from '../../components/UI/EmployeeHeading'
import EmployeeContent from '../../components/UI/EmployeeContent'

const ScreensEmployeeCalculator = ({ match: { params } }) => {
  return (
    <ContainerWrapper fluid>
      <EmployeeHeading
        mainHeading='BILL SUMMARY'
        subHeading={`Summary for table #${params.tableId}`} />
      <EmployeeContent>
        <EmployeeCalculator />
      </EmployeeContent>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

export default ScreensEmployeeCalculator
