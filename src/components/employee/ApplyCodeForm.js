import React from 'react'
import styled from 'styled-components'
import { Row, Col, Form } from 'reactstrap'
import WrappedButton from '../common/WrappedButton'
import { Field, reduxForm } from 'redux-form'

const ApplyCodeForm = ({ handleSubmit, inputCodes, toggle }) => {
  return (
    <Row>
      <Col>
        <Field
          name='discountCode'
          inputCodes={inputCodes}
          className='form-control'
          component={renderSelectField} />
          <Row>
            <ButtonActionWrapper>
              <WrappedButton
                className='mr-2'
                iconName='send'
                color='#f9bc02'
                size='sm'
                text='APPLY'
                onClick={handleSubmit} />{' '}
              <WrappedButton
                textcolor='#FFF'
                iconName='clear'
                color='#ef405a'
                size='sm'
                text='CANCLE'
                onClick={toggle} />
            </ButtonActionWrapper>
          </Row>
      </Col>
    </Row>
  )
}

const ButtonActionWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px;
`

const renderSelectField = ({
  inputCodes,
  name,
  input,
  label,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    <Field className='form-control' component='select' name='discountCode'>
      <option value=''>Please select discount code</option>
      {inputCodes.map(code => <option key={code.id} value={code.codeName}>{code.codeName}</option>)}
    </Field>
  </div>
)

const validate = (value, { inputCodes }) => {
  console.log(value, inputCodes)
  const errors = {}
  if(value.discountCode === "LUCKY ONE" ) {
  }
  return errors
}

export default reduxForm({
  form: 'applyCodeForm',
  validate
})(ApplyCodeForm)
