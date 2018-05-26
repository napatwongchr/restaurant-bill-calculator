import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableBox = ({ number, onClick }) => {
  return (
    <CircleBox onClick={onClick}>
      <TableHeadings>Table</TableHeadings>
      <TableNumber>{number}</TableNumber>
    </CircleBox>
  )
}

const CircleBox = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: translate(0px, -5px);
  }
`

const TableHeadings = styled.span`
  position: relative;
  top: 7px;
`

const TableNumber = styled.span`
  position: relative;
  top: -4px;
  font-size: 40px;
`

export default TableBox
