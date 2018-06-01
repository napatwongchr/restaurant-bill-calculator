import React from 'react'
import styled from 'styled-components'
import AdminLayout1 from './common/AdminLayout1'

const AdminApp = () => {
  return (
    <AdminLayout1 headings='Dashboard'>
      <AdminContentWrapper>
        <h2 className='text-muted'>WELCOME TO ADMIN DASHBOARD</h2>
        <h5 className='text-muted'>Click discount code menu to manage discount code</h5>
      </AdminContentWrapper>
    </AdminLayout1>
  )
}

const AdminContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default AdminApp
