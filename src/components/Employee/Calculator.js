import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchTableById, calculateExchange } from 'actions/Table'
import { applyCode, removeCodeFromBill } from 'actions/Codes'

import EmployeeBill from 'components/UI/EmployeeBill'
import EmployeeDiscountCodesModal from 'components/Employee/DiscountCodes/Modal'

class EmployeeCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
    this.handleExchange = this.handleExchange.bind(this)
    this.handleRemoveCode = this.handleRemoveCode.bind(this)
    this.handleSubmitCode = this.handleSubmitCode.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  handleExchange(event) {
    const { table: { billTotal }, calculateExchange } = this.props
    calculateExchange(billTotal, event.target.value)
  }

  handleSubmitCode(value) {
    const { applyCode, code: { codes }, table: { singleTable } } = this.props
    applyCode(singleTable, value, codes, this.toggle)
  }

  handleRemoveCode() {
    const { removeCodeFromBill, code: { codes }, table: { singleTable } } = this.props
    removeCodeFromBill(singleTable, codes)
  }

  componentDidMount() {
    const { fetchTableById, codes, match: { params: { tableId } } } = this.props
    fetchTableById(+tableId, codes)
  }

  renderBill() {
    const { code: { codes }, table: { singleTable }, history } = this.props
    return (
      <div>
        <EmployeeBill
          { ...this.props.table }
          { ...this.props.code }
          history={history}
          handleRemoveCode={this.handleRemoveCode}
          handleExchange={this.handleExchange}
          modalToggle={this.toggle} />
        <EmployeeDiscountCodesModal
          singleTable={singleTable}
          inputCodes={codes}
          handleSubmitCode={this.handleSubmitCode}
          isOpen={this.state.modal}
          toggle={this.toggle} />
      </div>
    )
  }

  render() {
    const { singleTable } = this.props.table
    return singleTable && this.renderBill()
  }
}

const mapStateToProps = ({ table, code }) => {
  return { table, code }
}

export default withRouter(
  connect(mapStateToProps,
    { fetchTableById, calculateExchange, applyCode,
      removeCodeFromBill })(EmployeeCalculator)
)
