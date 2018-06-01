import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

const EmployeeHeading = ({ mainHeading, subHeading }) => {
  return (
    <HeadingWrapper>
      <HeadingContent>
        <MainHeadingText>{ mainHeading }</MainHeadingText>
        <h5>{ subHeading }</h5>
      </HeadingContent>
    </HeadingWrapper>
  )
}

const HeadingWrapper = styled(Row)`
  height: 300px;
  background-color: #f9bc02;
  border-radius: 0 0 50px 50px;
`

const HeadingContent = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainHeadingText = styled.h1`
  font-size: 56px;
  font-weight: bolder;
`

EmployeeHeading.defaultProps = {
  mainHeading: 'MAIN HEADING',
  subHeading: 'This is sub headings'
}

EmployeeHeading.propTypes = {
  mainHeading: PropTypes.string,
  subHeading: PropTypes.string
}

export default EmployeeHeading
