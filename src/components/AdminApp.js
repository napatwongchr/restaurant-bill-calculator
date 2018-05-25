import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const AdminApp = () => {
  return (
    <Container fluid style={{height: '100vh'}}>
      <Row className='h-100'>
        <Col id='sticky-sidebar' className='bg-dark' md='2'>
          <div className='py-2 sticky-top'>
             <div className='nav flex-column'>
               
             </div>
           </div>
        </Col>
        <Col className='py-4 px-4'>
          <h2>Promotion Code</h2>
          {/* Content */}
        </Col>
      </Row>
    </Container>

  )
}

export default AdminApp
