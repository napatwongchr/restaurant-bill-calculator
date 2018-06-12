import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

import EmployeeDiscountCodesForm from 'components/Employee/DiscountCodes/Form'

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
