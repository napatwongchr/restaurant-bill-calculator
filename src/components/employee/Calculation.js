import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateBillTotal, calculateExchange } from '../../actions/Table'
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
    this.handleRecieveInput = this.handleRecieveInput.bind(this)
    this.handleApplyCode = this.handleApplyCode.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  handleApplyCode(event) {
    console.log(event.target.value)
  }

  handleRecieveInput(event) {
    const { billTotal } = this.props
    this.props.calculateExchange(billTotal, event.target.value)
  }

  componentWillMount() {
    const { fetchTableById, match: { params: { tableId } } } = this.props
    this.props.fetchTableById(+tableId)
  }

  renderBill(table, billTotal, codes, subTotal, exchange) {
    return (
      <div>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings={`Summary for table #${table.id}`} />
        <EmployeeContent classname='d-flex justify-content-center'>
          <EmployeeBill
            handleRecieveInput={this.handleRecieveInput}
            exchange={exchange}
            table={table}
            subTotal={subTotal}
            billTotal={billTotal}
            codes={codes}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            handleApplyCode={this.handleApplyCode}
            isOpen={this.state.modal}
            classname={this.props.className}
            toggle={this.toggle} />
        </EmployeeContent>
      </div>
    )
  }

  render() {
    const { table, billTotal, codes, subTotal, exchange } = this.props
    return (
      <ContainerWrapper fluid>
        { table && this.renderBill(table, billTotal, codes, subTotal, exchange) }
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const mapStateToProps = ({ table }) => {
  const { singleTable, billTotal, codes, subTotal, exchange } = table
  return { table: singleTable, billTotal, codes, subTotal, exchange }
}
export default connect(mapStateToProps, { fetchTableById,
  calculateBillTotal, calculateExchange })(Calculation)
