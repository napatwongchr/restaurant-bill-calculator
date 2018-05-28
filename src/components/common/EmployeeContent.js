import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import styled from 'styled-components'

const EmployeeContent = ({ children }) => {
  return (
    <BodyArea>
      {children}
    </BodyArea>
  )
}

const BodyArea = styled(Row)`
  display: flex;
  justify-content: center;
  position: relative;
  top: -50px;
`

EmployeeContent.defaultProps = {
  classname: ''
}

export default EmployeeContent
