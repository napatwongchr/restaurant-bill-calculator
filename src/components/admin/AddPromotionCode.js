import React, { Component } from 'react'
import { Input, Row, Col,
Button } from 'reactstrap'
import WrappedButton from '../common/WrappedButton'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'

class AddPromotionCode extends Component {
  render() {
    return (
      <AdminLayout1 headings='Add promotion code'>
        <AdminHeadings>
          <h2>Add Promotion Code</h2>
        </AdminHeadings>
        <Row className='mt-3'>
          <Col md='4' className='d-flex'>
            <Input placeholder='Promotion Code' />
            <WrappedButton
              className='ml-2'
              onClick={() => console.log('add action')}
              iconName='add'
              textcolor='#000'
              color='#f9bc02'
              size='lg'
              text='ADD' />
          </Col>
        </Row>
      </AdminLayout1>
    )
  }
}

export default AddPromotionCode
