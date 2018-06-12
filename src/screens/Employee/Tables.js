import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import EmployeeHeading from 'components/UI/EmployeeHeading'
import EmployeeContent from 'components/UI/EmployeeContent'
import EmployeeTables from 'components/Employee/Tables'

const ScreensEmployeeTables = () => {
  return (
    <ContainerWrapper fluid>
      <EmployeeHeading
        mainHeading='BILL CALCULATOR'
        subHeading='Please select the table' />
      <EmployeeContent>
        <EmployeeTables />
      </EmployeeContent>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

export default ScreensEmployeeTables
