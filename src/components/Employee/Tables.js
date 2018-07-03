import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Col } from 'reactstrap'

import DataProvider from 'components/Employee/DataProvider'
import TableBox from 'components/UI/TableBox'

class EmployeeTables extends Component {
  renderTableList(tables) {
    const { history } = this.props
    return tables.map((table, index) => (
      <TableBox
        key={table.id}
        hasPeople={table.people}
        onClick={() => history.push(`/employee/calculator/${table.id}`)}
        number={table.id}
      />
    ))
  }

  render() {
    return (
      <DataProvider
        render={tables => (
          <TableListWrapper className="mx-5">
            {tables && this.renderTableList(tables)}
          </TableListWrapper>
        )}
      />
    )
  }
}

const TableListWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default withRouter(EmployeeTables)
