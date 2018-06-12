import React from 'react'
import { Row, Col } from 'reactstrap'

import AdminLayout1 from '../../../components/UI/AdminLayout1'
import AdminHeadings from '../../../components/UI/AdminHeadings'
import DiscountCodesFormAdd from '../../../components/Admin/DiscountCodes/Form/Add'

const ScreenAdminDiscountCodesAdd = () => {
  return (
    <AdminLayout1 headings='Add discount code'>
      <AdminHeadings>
        <h2>Add Discount Code</h2>
      </AdminHeadings>
      <Row className='mt-3'>
        <Col>
          <DiscountCodesFormAdd />
        </Col>
      </Row>
    </AdminLayout1>
  )
}

export default ScreenAdminDiscountCodesAdd
