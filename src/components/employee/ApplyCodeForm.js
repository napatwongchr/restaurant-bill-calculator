import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'
import WrappedButton from '../UI/WrappedButton'
import { Field, reduxForm } from 'redux-form'

const ApplyCodeForm = ({ handleSubmit, inputCodes, toggle, singleTable }) => {
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
                onClick={handleSubmit} />
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

const renderSelectField = ({
  inputCodes,
  name,
  input,
  label,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    <Field className='form-control mb-2' component='select' name='discountCode'>
      <option value=''>Please select discount code</option>
      {inputCodes.map(code => <option key={code.id} value={code.codeName}>{code.codeName}</option>)}
    </Field>
    { touched && (error && <ImportantText>{ error }</ImportantText>)}
  </div>
)

const ButtonActionWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px;
`

const ImportantText = styled.span`
  color: #ef405a;
`

const validate = (value, { inputCodes, singleTable }) => {
  const errors = {}
  if (!value.discountCode) {
    errors.discountCode = 'Press cancle or outside area to dismiss.'
  } else {
    for(let code of inputCodes) {
      if(value.discountCode === code.codeName) {
        if(+code.limitPeople !== singleTable.people && +code.limitPeople !== 0) {
          errors.discountCode = `${value.discountCode} needs ${code.limitPeople} people to be applied`
        }
      }
    }
  }
  return errors
}

export default reduxForm({
  form: 'applyCodeForm',
  validate
})(ApplyCodeForm)
