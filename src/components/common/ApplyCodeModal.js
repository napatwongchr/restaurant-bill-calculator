import React from 'react'
import WrappedButton from './WrappedButton'
import { Modal, ModalHeader,
ModalBody, ModalFooter, Input } from 'reactstrap'
import styled from 'styled-components'

const ApplyCodeModal = ({ isOpen, toggle, classname,
  handleApplyCode, items, submitCode, inputCodes, selectedCode }) => {
  return  <div>
             <Modal isOpen={isOpen} toggle={toggle} className={classname}>
               <ModalHeader toggle={toggle}>
                <span>Apply Code</span>
               </ModalHeader>
               <ModalBody>
                 <Input
                   type='select'
                   value={selectedCode}
                   onChange={handleApplyCode}>
                    <option value='default' disabled>Please select discount code</option>
                    { inputCodes
                      ? inputCodes.map((code, index) =>
                        <option key={index} value={code.name}>{code.name}</option>)
                      : null }
                 </Input>
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
}

export default ApplyCodeModal
