import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Form, FormGroup } from 'reactstrap'

import WrappedButton from 'components/UI/WrappedButton'

const DiscountCodesForm = ({ handleSubmit, buttonText }) => {
  return (
    <Form>
      <Row>
        <Col>
          <FormGroup>
            <Field
              required
              label="Code Name"
              className="form-control"
              type="text"
              name="codeName"
              component={renderField}
              placeholder="code name"
            />
          </FormGroup>
          <FormGroup>
            <Field
              required
              label="Discount Type"
              className="form-control"
              name="discountCodeType"
              component={renderSelectField}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Field
              required
              format={numberFormatter}
              parse={numberParser}
              label="Amount Discount"
              className="form-control"
              type="number"
              name="amountDiscount"
              component={renderField}
              placeholder="discount amount"
            />
          </FormGroup>
          <FormGroup>
            <Field
              format={numberFormatter}
              parse={numberParser}
              label="Limit People"
              className="form-control"
              type="number"
              name="limitPeople"
              component={renderField}
              placeholder="people number condition"
            />
          </FormGroup>
          <FormGroup>
            <Field
              label="Extra"
              className="form-control"
              type="text"
              name="extra"
              component={renderField}
              placeholder="just test add extra"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <WrappedButton
            onClick={handleSubmit}
            iconName="add"
            textcolor="#000"
            color="#f9bc02"
            size="lg"
            text={buttonText}
          />
        </Col>
      </Row>
    </Form>
  )
}

const numberFormatter = value => String(value)
const numberParser = value =>  Number(value)

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
      <LabelText>
        {label} {required && <ImportantText>*</ImportantText>}
      </LabelText>
      {touched && (error && <ImportantText>{error}</ImportantText>)}
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
  meta: { touched, error, warning }
}) => (
  <div>
    <FormLabelWrapper>
      <LabelText>
        {label} {required && <ImportantText>*</ImportantText>}
      </LabelText>
      {touched && (error && <ImportantText>{error}</ImportantText>)}
    </FormLabelWrapper>
    <div>
      <Field
        className="form-control"
        name="discountCodeType"
        component="select"
      >
        <option value="">Please select discount type</option>
        <option value="fixed">Fixed</option>
        <option value="percent">Percent</option>
      </Field>
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
  console.log('values from validate:', values);
  const errors = {}
  if (!values.codeName) {
    errors.codeName = 'Required'
  }
  if (!values.discountCodeType) {
    errors.discountCodeType = 'Required'
  }
  if (!values.amountDiscount) {
    errors.amountDiscount = 'Required'
  } else if (values.amountDiscount < 0) {
    errors.amountDiscount = 'Amount discount should not be less than zero'
  }
  if (values.limitPeople < 0) {
    errors.limitPeople = 'Limit people should not be less than zero'
  } else if (!Number.isInteger(values.limitPeople)) {
    errors.limitPeople = 'Limit peple should be integer'
  }
  return errors
}

export const DiscountCodesFormEdit = reduxForm({
  form: 'editDiscountCodeForm',
  enableReinitialize: true,
  validate
})(DiscountCodesForm)

export const DiscountCodesFormAdd = reduxForm({
  form: 'addDiscountCodeForm',
  validate
})(DiscountCodesForm)
