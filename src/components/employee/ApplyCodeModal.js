import React from 'react'
import ApplyCodeForm from './ApplyCodeForm'

import { Modal, ModalHeader,
ModalBody, ModalFooter, Input } from 'reactstrap'

const ApplyCodeModal = ({ isOpen, toggle, handleSubmitCode,
  inputCodes }) => {
  return  <div>
             <Modal isOpen={isOpen} toggle={toggle}>
               <ModalHeader toggle={toggle}>
                <span>Apply Code</span>
               </ModalHeader>
               <ModalBody>
                 <ApplyCodeForm
                   toggle={toggle}
                   onSubmit={handleSubmitCode}
                   inputCodes={inputCodes} />
               </ModalBody>
             </Modal>
           </div>
}

export default ApplyCodeModal
