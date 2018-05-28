import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateExchange } from '../../actions/Table'
import { fetchCodes, applyCode, removeCodeFromBill } from '../../actions/Codes'
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
    this.handleRemoveCode = this.handleRemoveCode.bind(this)
    this.handleSubmitCode = this.handleSubmitCode.bind(this)
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

  handleSubmitCode() {
    const { singleTable: { items } } = this.props
    this.props.applyCode(items, this.state.selectedCode, this.toggle)
  }

  handleRemoveCode() {
    const { singleTable: { items } } = this.props
    this.props.removeCodeFromBill(items)
  }

  componentWillMount() {
    const { fetchTableById, match: { params: { tableId } } } = this.props
    this.props.fetchTableById(+tableId)
    this.props.fetchCodes()
  }

  renderBill(singleTable, billTotal, appliedCode, subTotal, exchange, codes) {
    return (
      <div>
        <EmployeeHeadings
          mainHeadings='BILL SUMMARY'
          subHeadings={`Summary for table #${singleTable.id}`} />
        <EmployeeContent>
          <EmployeeBill
            handleRemoveCode={this.handleRemoveCode}
            handleExchange={this.handleExchange}
            exchange={exchange}
            table={singleTable}
            subTotal={subTotal}
            billTotal={billTotal}
            appliedCode={appliedCode}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            inputCodes={codes}
            selectedCode={this.state.selectedCode}
            handleSubmitCode={this.handleSubmitCode}
            handleApplyCode={this.handleApplyCode}
            isOpen={this.state.modal}
            classname={this.props.className}
            toggle={this.toggle} />
        </EmployeeContent>
      </div>
    )
  }

  render() {
    const { singleTable, billTotal, appliedCode,
      subTotal, exchange, codes } = this.props
    return (
      <ContainerWrapper fluid>
        { singleTable && this.renderBill(singleTable, billTotal, appliedCode,
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
  const { codes, appliedCode } = code
  const { singleTable, billTotal, subTotal, exchange } = table
  return { singleTable, billTotal, appliedCode, subTotal, exchange, codes }
}
export default connect(mapStateToProps, { fetchTableById, fetchCodes,
  calculateExchange, applyCode, removeCodeFromBill })(Calculation)
