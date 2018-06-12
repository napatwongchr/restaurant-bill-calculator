import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import WrappedButton from './WrappedButton'

const ConfirmationModal = ({ toggle, handleDelete, isOpen, text }) => {
  return (
    <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Action comfirmation</ModalHeader>
          <ModalBody>
            { text }
          </ModalBody>
          <ModalFooter>
            <WrappedButton
              className='mr-2'
              iconName='send'
              color='#f9bc02'
              size='sm'
              text='SURE !'
              onClick={handleDelete} />
            <WrappedButton
              textcolor='#FFF'
              iconName='clear'
              color='#ef405a'
              size='sm'
              text='CANCLE'
              onClick={toggle} />
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default ConfirmationModal
