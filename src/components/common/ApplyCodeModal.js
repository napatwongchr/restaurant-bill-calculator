import React from 'react'
import WrappedButton from './WrappedButton'
import { Button, Modal, ModalHeader,
ModalBody, ModalFooter, Input } from 'reactstrap'
import styled from 'styled-components'

const ApplyCodeModal = ({ isOpen, toggle, classname }) => {
  return (
    <div>
     <Modal isOpen={isOpen} toggle={toggle} className={classname}>
       <ModalHeader toggle={toggle}>Apply Code</ModalHeader>
       <ModalBody>
         <Input />
       </ModalBody>
       <ModalFooter>
         <WrappedButton
           iconName='send'
           color='#f9bc02'
           size='sm'
           text='APPLY'
           onClick={toggle} />{' '}
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
export default ApplyCodeModal
