import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableBox = ({ number, onClick, hasPeople }) => {
  return (
    <CircleBox
      className='circle-box'
      onClick={onClick}>
      { hasPeople && <HasPeopleIcon className='material-icons'>person</HasPeopleIcon> }
      <TableHeadings>Table</TableHeadings>
      <TableNumber>{number}</TableNumber>
    </CircleBox>
  )
}

const CircleBox = styled.div`
  position: relative;
  margin: 10px 20px;
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

const HasPeopleIcon = styled.i`
  color: #fff;
  background-color: #407fed;
  border-radius: 50px;
  padding: 3px;
  position: absolute;
  top: -4px;
  right: -5px;
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

TableBox.defaultProps = {
  onClick: () => {}
}

TableBox.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func
}

export default TableBox
