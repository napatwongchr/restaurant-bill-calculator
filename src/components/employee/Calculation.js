import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateExchange, applyCode,
removeCode } from '../../actions/Table'
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
      modal: false,
      codes: null
    }
    this.toggle = this.toggle.bind(this);
    this.handleRecieveInput = this.handleRecieveInput.bind(this)
    this.handleApplyCode = this.handleApplyCode.bind(this)
    this.submitCode = this.submitCode.bind(this)
    this.handleRemoveCode = this.handleRemoveCode.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  handleApplyCode(event) {
    this.setState({codes: event.target.value})
  }

  handleRecieveInput(event) {
    const { billTotal } = this.props
    this.props.calculateExchange(billTotal, event.target.value)
  }

  submitCode() {
    const { table: { items } } = this.props
    this.props.applyCode(items, this.state.codes, this.toggle)
  }

  handleRemoveCode() {
    const { table: { items } } = this.props
    this.props.removeCode(items)
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
            handleRemoveCode={this.handleRemoveCode}
            handleRecieveInput={this.handleRecieveInput}
            exchange={exchange}
            table={table}
            subTotal={subTotal}
            billTotal={billTotal}
            codes={codes}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            submitCode={this.submitCode}
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
  calculateExchange, applyCode, removeCode })(Calculation)
