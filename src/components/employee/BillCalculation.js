import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableById, calculateExchange } from '../../actions/Table'
import { applyCode, removeCodeFromBill } from '../../actions/Codes'
import styled from 'styled-components'
import EmployeeHeading from '../UI/EmployeeHeading'
import EmployeeContent from '../UI/EmployeeContent'
import EmployeeBill from '../UI/EmployeeBill'
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
        <EmployeeHeading
          mainHeading='BILL SUMMARY'
          subHeading={`Summary for table #${singleTable.id}`} />
        <EmployeeContent>
          <EmployeeBill
            { ...this.props.table }
            { ...this.props.code }
            history={history}
            handleRemoveCode={this.handleRemoveCode}
            handleExchange={this.handleExchange}
            modalToggle={this.toggle} />
          <ApplyCodeModal
            singleTable={singleTable}
            inputCodes={codes}
            handleSubmitCode={this.handleSubmitCode}
            isOpen={this.state.modal}
            toggle={this.toggle} />
        </EmployeeContent>
      </div>
    )
  }

  render() {
    const { singleTable } = this.props.table
    return (
      <ContainerWrapper fluid>
        { singleTable && this.renderBill() }
      </ContainerWrapper>
    )
  }
}

const ContainerWrapper = styled(Container)`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const mapStateToProps = ({ table, code }) => {
  return { table, code }
}

export default connect(mapStateToProps,
  { fetchTableById, calculateExchange, applyCode,
    removeCodeFromBill })(BillCalculation)
