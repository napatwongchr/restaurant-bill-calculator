import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateExchange } from '../../actions/Table'
import { applyCode, removeCodeFromBill, clearSelectedCode } from '../../actions/Codes'
import styled from 'styled-components'
import EmployeeHeadings from '../common/EmployeeHeadings'
import EmployeeContent from '../common/EmployeeContent'
import EmployeeBill from '../common/EmployeeBill'
import ApplyCodeModal from './ApplyCodeModal'

import { Container } from 'reactstrap'

class BillCalculation extends Component {
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
    const { billTotal, calculateExchange } = this.props
    calculateExchange(billTotal, event.target.value)
  }

  handleSubmitCode(value) {
    const { applyCode, codes, singleTable: { items } } = this.props
    applyCode(items, value, codes, this.toggle)
  }

  handleRemoveCode() {
    const { removeCodeFromBill, codes, singleTable: { items } } = this.props
    removeCodeFromBill(items, codes)
  }

  componentDidMount() {
    const { fetchTableById, codes, selectedCode, match: { params: { tableId } } } = this.props
    fetchTableById(+tableId, selectedCode, codes)
  }

  renderBill(singleTable, billTotal, appliedCode,
    subTotal, exchange, codes,
    selectedCode) {
    return (
      <div>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings={`Summary for table #${singleTable.id}`} />
        <EmployeeContent>
          <EmployeeBill
            history={this.props.history}
            handleRemoveCode={this.handleRemoveCode}
            handleExchange={this.handleExchange}
            selectedCode={selectedCode}
            exchange={exchange}
            table={singleTable}
            subTotal={subTotal}
            billTotal={billTotal}
            appliedCode={appliedCode}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            table={singleTable}
            inputCodes={codes}
            handleSubmitCode={this.handleSubmitCode}
            isOpen={this.state.modal}
            toggle={this.toggle} />
        </EmployeeContent>
      </div>
    )
  }

  render() {
    const { singleTable, billTotal, appliedCode,
      subTotal, exchange, codes,
      selectedCode } = this.props
    return (
      <ContainerWrapper fluid>
        { singleTable && this.renderBill(singleTable, billTotal, appliedCode,
                                    subTotal, exchange, codes,
                                    selectedCode) }
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const mapStateToProps = ({ table, code }) => {
  const { codes, appliedCode, selectedCode } = code
  const { singleTable, billTotal, subTotal, exchange } = table
  return { singleTable, billTotal, appliedCode,
    subTotal, exchange, codes,
    selectedCode }
}
export default connect(mapStateToProps,
  { fetchTableById, calculateExchange, applyCode,
    removeCodeFromBill })(BillCalculation)
