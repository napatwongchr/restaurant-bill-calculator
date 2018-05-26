import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import styled from 'styled-components'

const EmployeeContent = ({ children, classname }) => {
  return (
    <BodyArea className={classname}>
      {children}
    </BodyArea>
  )
}

const BodyArea = styled(Row)`
  position: relative;
  top: -50px;
`

EmployeeContent.defaultProps = {
  classname: ''
}

export default EmployeeContent
