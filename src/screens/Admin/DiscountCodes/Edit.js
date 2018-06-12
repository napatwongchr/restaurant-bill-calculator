import React from 'react'
import { Row, Col } from 'reactstrap'
import AdminLayout1 from '../../../components/UI/AdminLayout1'
import AdminHeadings from '../../../components/UI/AdminHeadings'
import DiscountCodesFormEdit from '../../../components/admin/DiscountCodes/Form/Edit'

const ScreenAdminDiscountCodesEdit = () => {
  return (
    <AdminLayout1 headings='Add promotion code'>
      <AdminHeadings>
        <h2>Edit Discount Code</h2>
      </AdminHeadings>
      <Row className='mt-3'>
        <Col>
          <DiscountCodesFormEdit />
        </Col>
      </Row>
    </AdminLayout1>
  )
}

export default ScreenAdminDiscountCodesEdit
