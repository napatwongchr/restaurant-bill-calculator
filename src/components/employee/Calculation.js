import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateBillTotal} from '../../actions/Table'
import styled from 'styled-components'
import EmployeeHeadings from '../common/EmployeeHeadings'
import EmployeeContent from '../common/EmployeeContent'
import EmployeeBill from '../common/EmployeeBill'
import ApplyCodeModal from '../common/ApplyCodeModal'

import { Container } from 'reactstrap'

class Calculation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  componentWillMount() {
    const { fetchTableById, match: { params: { tableId } } } = this.props
    this.props.fetchTableById(+tableId)
  }

  renderBill(table, billTotal, codes) {
    return (
      <div>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings={`Summary for table #${table.id}`} />
        <EmployeeContent classname='d-flex justify-content-center'>
          <EmployeeBill
            table={table}
            billTotal={billTotal}
            codes={codes}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            isOpen={this.state.modal}
            classname={this.props.className}
            toggle={this.toggle} />
        </EmployeeContent>
      </div>
    )
  }

  render() {
    const { table, billTotal, codes } = this.props
    return (
      <ContainerWrapper fluid>
        { table && this.renderBill(table, billTotal, codes) }
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const mapStateToProps = ({ table }) => {
  const { singleTable, billTotal, codes } = table
  return { table: singleTable, billTotal, codes  }
}
export default connect(mapStateToProps, { fetchTableById, calculateBillTotal })(Calculation)
