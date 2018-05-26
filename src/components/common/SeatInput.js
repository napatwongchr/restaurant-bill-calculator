import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, Input,
Button} from 'reactstrap'

const SeatInput = ({ decreaseCount, increaseCount, count }) => {
  return (
    <InputGroup size='lg'>
      <InputGroupAddon addonType='prepend'>
        <Button onClick={decreaseCount} color='secondary'>-</Button>
      </InputGroupAddon>
      <Input value={count} placeholder='Seats' />
      <InputGroupAddon addonType='append'>
        <Button onClick={increaseCount} color='secondary'>+</Button>
      </InputGroupAddon>
    </InputGroup>
  )
}

SeatInput.defaultProps = {
  count: 0
}

SeatInput.propTypes = {
  decreaseCount: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
  count: PropTypes.number
}

export default SeatInput
