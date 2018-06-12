import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchTable } from '../actions/Table'
import EmployeeHeading from './UI/EmployeeHeading'
import EmployeeContent from './UI/EmployeeContent'
import TableBox from './UI/TableBox'
import { Container, Col } from 'reactstrap'

class EmployeeApp extends Component {
  componentDidMount() {
    this.props.fetchTable()
  }

  renderTableList(tables) {
    const { history } = this.props
    return tables.map((table, index) => <TableBox
      key={table.id}
      hasPeople={table.people}
      onClick={() => history.push(`/employee/calculation/${table.id}`)}
      number={table.id}/>)
  }

  render() {
    const { tables } = this.props
    return (
      <ContainerWrapper fluid>
        <EmployeeHeading
          mainHeading='BILL CALCULATOR'
          subHeading='Please select the table' />
        <EmployeeContent>
          <TableListWrapper className='mx-5'>
            { tables && this.renderTableList(tables) }
          </TableListWrapper>
        </EmployeeContent>
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const TableListWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const mapStateToProps = ({ table }) => {
  const { tables } = table
  return { tables }
}

export default connect(mapStateToProps, { fetchTable })(EmployeeApp)
