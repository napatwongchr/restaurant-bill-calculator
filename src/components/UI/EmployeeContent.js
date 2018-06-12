import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from 'reactstrap'

const EmployeeContent = ({ children }) => {
  return (
    <EmployeeContentWrapper>
      { children }
    </EmployeeContentWrapper>
  )
}

const EmployeeContentWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  position: relative;
  top: -50px;
`

EmployeeContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}

export default EmployeeContent
