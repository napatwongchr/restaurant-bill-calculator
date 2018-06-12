import React from 'react'
import AdminLayout1 from '../../../components/UI/AdminLayout1'
import AdminHeadings from '../../../components/UI/AdminHeadings'
import WrappedButton from '../../../components/UI/WrappedButton'
import DiscountCodesList from '../../../components/admin/DiscountCodes/List'

const ScreenAdminDiscountCodesList = ({ history }) => {
  return (
    <AdminLayout1 headings='Promotion Code'>
      <AdminHeadings>
        <h2>Discount Codes</h2>
        <WrappedButton
          onClick={() => history.push('/admin/discount-codes/add')}
          iconName='add'
          textcolor='#000'
          color='#f9bc02'
          size='lg'
          text='ADD' />
      </AdminHeadings>
      <DiscountCodesList />
    </AdminLayout1>
  )
}

export default ScreenAdminDiscountCodesList
