import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateExchange, applyCode,
removeCode } from '../../actions/Table'
import { fetchCodes } from '../../actions/Codes'
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
      selectedCode: 'default'
    }
    this.toggle = this.toggle.bind(this);
    this.handleExchange = this.handleExchange.bind(this)
    this.handleApplyCode = this.handleApplyCode.bind(this)
    this.submitCode = this.submitCode.bind(this)
    this.handleRemoveCode = this.handleRemoveCode.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  handleApplyCode(event) {
    this.setState({selectedCode: event.target.value})
  }

  handleExchange(event) {
    const { billTotal } = this.props
    this.props.calculateExchange(billTotal, event.target.value)
  }

  submitCode() {
    const { table: { items } } = this.props
    this.props.applyCode(items, this.state.selectedCode, this.toggle)
  }

  handleRemoveCode() {
    const { table: { items } } = this.props
    this.props.removeCode(items)
  }

  componentWillMount() {
    const { fetchTableById, match: { params: { tableId } } } = this.props
    this.props.fetchTableById(+tableId)
    this.props.fetchCodes()
  }

  renderBill(table, billTotal, appliedCode, subTotal, exchange, codes) {
    return (
      <div>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings={`Summary for table #${table.id}`} />
        <EmployeeContent>
          <EmployeeBill
            handleRemoveCode={this.handleRemoveCode}
            handleExchange={this.handleExchange}
            exchange={exchange}
            table={table}
            subTotal={subTotal}
            billTotal={billTotal}
            appliedCode={appliedCode}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            inputCodes={codes}
            selectedCode={this.state.selectedCode}
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
    const { table, billTotal, appliedCode,
      subTotal, exchange, codes } = this.props
    return (
      <ContainerWrapper fluid>
        { table && this.renderBill(table, billTotal, appliedCode,
                                    subTotal, exchange, codes) }
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const mapStateToProps = ({ table, code }) => {
  const { codes } = code
  const { singleTable, billTotal, appliedCode, subTotal, exchange } = table
  return { table: singleTable, billTotal, appliedCode, subTotal, exchange, codes }
}
export default connect(mapStateToProps, { fetchTableById, fetchCodes,
  calculateExchange, applyCode, removeCode })(Calculation)
