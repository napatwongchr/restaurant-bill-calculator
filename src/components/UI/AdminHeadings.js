import React from 'react'
import PropTypes from 'prop-types'

const AdminHeadings = ({ children }) => {
  return <div className="d-flex justify-content-between">{children}</div>
}

AdminHeadings.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
}

export default AdminHeadings
