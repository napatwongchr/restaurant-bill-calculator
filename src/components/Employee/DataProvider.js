import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTable } from 'actions/Table'

class DataProvider extends Component {
  componentDidMount() {
    this.props.fetchTable()
  }

  render() {
    return <div>{this.props.render(this.props.tables)}</div>
  }
}

const mapStateToProps = ({ table }) => {
  const { tables } = table
  return { tables }
}

export default connect(
  mapStateToProps,
  { fetchTable }
)(DataProvider)
