import React from 'react'
import AdminLayout1 from './common/AdminLayout1'

const AdminApp = () => {
  return (
    <AdminLayout1 headings='Dashboard'>
      <div className='d-flex flex-column justify-content-center align-items-center h-100'>
        <h2 className='text-muted'>Welcome to admin dashboard</h2>
        <h5 className='text-muted'>Click promotion code to manage promotion code</h5>
      </div>
    </AdminLayout1>
  )
}

export default AdminApp
