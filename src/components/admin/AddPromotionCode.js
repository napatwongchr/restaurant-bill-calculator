import React, { Component } from 'react'
import { Input, Row, Col,
Button, Form, FormGroup,
Label } from 'reactstrap'
import WrappedButton from '../common/WrappedButton'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'

class AddPromotionCode extends Component {
  render() {
    return (
      <AdminLayout1 headings='Add promotion code'>
        <AdminHeadings>
          <h2>Add Discount Code</h2>
        </AdminHeadings>
        <Row className='mt-3'>
          <Col md='5'>
            <Form>
              <FormGroup>
                <Label for='discountCodeName'>Code name</Label>
                <Input type='text' name='codeName' placeholder='name' />
              </FormGroup>
              <FormGroup>
                <Label for='discountCodeName'>Discount Type</Label>
                <Input type='select' name='discountType'>
                  <option>Fixed</option>
                  <option>Percent</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='amountDiscount'>Amount discount</Label>
                <Input type='number' name='amountDiscount' />
              </FormGroup>
              <FormGroup>
                <Label for='limitPeople'>Limit People</Label>
                <Input type='number' name='limitPeople' />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md='5' className='text-right'>
            <WrappedButton
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
