import React from 'react'
import EmployeeDiscountCodesForm from './Form'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const EmployeeDiscountCodesModal = ({ isOpen, toggle, handleSubmitCode,
  inputCodes, singleTable }) => (
    <div>
     <Modal isOpen={isOpen} toggle={toggle}>
       <ModalHeader toggle={toggle}>
        <span>Apply Code</span>
       </ModalHeader>
       <ModalBody>
         <EmployeeDiscountCodesForm
           toggle={toggle}
           onSubmit={handleSubmitCode}
           inputCodes={inputCodes}
           singleTable={singleTable} />
       </ModalBody>
     </Modal>
   </div>
  )

export default EmployeeDiscountCodesModal
