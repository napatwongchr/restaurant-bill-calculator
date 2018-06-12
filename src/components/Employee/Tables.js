import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Col } from 'reactstrap'

import { fetchTable } from 'actions/Table'

import TableBox from 'components/UI/TableBox'


class EmployeeApp extends Component {
  componentDidMount() {
    this.props.fetchTable()
  }

  renderTableList(tables) {
    const { history } = this.props
    return tables.map((table, index) => <TableBox
      key={table.id}
      hasPeople={table.people}
      onClick={() => history.push(`/employee/calculator/${table.id}`)}
      number={table.id}/>)
  }

  render() {
    const { tables } = this.props
    return (
      <TableListWrapper className='mx-5'>
        { tables && this.renderTableList(tables) }
      </TableListWrapper>
    )
  }
}

const TableListWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const mapStateToProps = ({ table }) => {
  const { tables } = table
  return { tables }
}

export default withRouter(
  connect(mapStateToProps, { fetchTable })(EmployeeApp)
)
