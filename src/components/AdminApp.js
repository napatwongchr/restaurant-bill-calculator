import React from 'react'
import AdminLayout1 from './common/AdminLayout1'

const AdminApp = () => {
  return (
    <AdminLayout1 headings='Dashboard'>
      <div className='d-flex flex-row justify-content-center align-items-center h-75'>
        <h3 className='text-muted'>Welcome to admin dashboard</h3>
      </div>
    </AdminLayout1>
  )
}

export default AdminApp
