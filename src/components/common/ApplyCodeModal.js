import React from 'react'
import WrappedButton from './WrappedButton'
import { Modal, ModalHeader,
ModalBody, ModalFooter, Input } from 'reactstrap'
import styled from 'styled-components'

const ApplyCodeModal = ({ isOpen, toggle, classname,
  handleApplyCode, codes, items, submitCode }) => {
  return (
    <div>
     <Modal isOpen={isOpen} toggle={toggle} className={classname}>
       <ModalHeader toggle={toggle}>Apply Code</ModalHeader>
       <ModalBody>
         <Input onChange={handleApplyCode} placeholder='APPLY DISCOUNT CODE HERE ...'/>
       </ModalBody>
       <ModalFooter>
         <WrappedButton
           iconName='send'
           color='#f9bc02'
           size='sm'
           text='APPLY'
           onClick={submitCode} />{' '}
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
