import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { Input, Row, Col,
Button, Form, FormGroup,
Label } from 'reactstrap'
import WrappedButton from '../common/WrappedButton'

const AddDiscountCodeForm = ({ handleSubmit, selectValue, handleSelect }) => {
  return <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Field
                    required
                    label='Code name'
                    className='form-control'
                    type='text'
                    name='codeName'
                    component={renderField}
                    placeholder='code name' />
                </FormGroup>
                <FormGroup>
                  <Field
                    selectValue={selectValue}
                    handleSelect={handleSelect}
                    required
                    label='Discount Type'
                    value='default'
                    className='form-control'
                    name='discountCodeType'
                    component={renderSelectField} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Field
                    required
                    label='Amount discount'
                    className='form-control'
                    type='number'
                    name='amountDiscount'
                    component={renderField}
                    placeholder='discount amount' />
                </FormGroup>
                <FormGroup>
                  <Field
                    required
                    label='Limit People'
                    className='form-control'
                    type='number'
                    name='limitPeople'
                    component={renderField}
                    placeholder='people number condition' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-end'>
                <WrappedButton
                  onClick={handleSubmit}
                  iconName='add'
                  textcolor='#000'
                  color='#f9bc02'
                  size='lg'
                  text='ADD' />
              </Col>
            </Row>
          </Form>
}

const renderField = ({
  input,
  label,
  type,
  className,
  required,
  meta: { touched, error, warning }
}) => (
  <div>
    <FormLabelWrapper>
      <LabelText>{label} { required && <ImportantText>*</ImportantText> }</LabelText>
      { touched && (error && <ImportantText>{error}</ImportantText>) }
    </FormLabelWrapper>
    <div>
      <input {...input} className={className} placeholder={label} type={type} />
    </div>
  </div>
)

const renderSelectField = ({
  input,
  label,
  className,
  required,
  selectValue,
  handleSelect,
  meta: { touched, error, warning }
}) => (
  <div>
    <FormLabelWrapper>
      <LabelText>{label} { required && <ImportantText>*</ImportantText> }</LabelText>
      {touched && (error && <ImportantText>{error}</ImportantText>) }
    </FormLabelWrapper>
    <div>
      <select
        {...input}
        value={selectValue}
        className={className}
        placeholder={label}
        onChange={handleSelect}>
        <option value='default' disabled>Please select discount type</option>
        <option value='fixed'>Fixed</option>
        <option value='percent'>Percent</option>
      </select>
    </div>
  </div>
)

const FormLabelWrapper = styled.div`
  display: flex;
`

const LabelText = styled.label`
  margin-right: 5px;
`

const ImportantText = styled.span`
  color: #ef405a;
`

const validate = values => {
  const errors = {}
  if(!values.codeName) {
    errors.codeName = 'Required'
  }
  if(!values.discountCodeType) {
    errors.discountCodeType = 'Required'
  }
  if(!values.amountDiscount) {
    errors.amountDiscount = 'Required'
  }
  if(!values.limitPeople) {
    errors.limitPeople = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'addDiscountCodeForm',
  validate
})(AddDiscountCodeForm)