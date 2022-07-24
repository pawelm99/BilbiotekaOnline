import React from 'react'
import './BookReadMore.css' 
import {Container,Row,Col,Button} from 'react-bootstrap'
function BookReadMore(props) {
    
    console.log(props)
  return (
    <div className='BookReadMore'>
        <Container>
      
      <Row xs={1} md={3}>
        <Col> {props.Book.name}</Col>
        <Col></Col>
        <Col></Col>
        <Col> <img className='imageReadMore' variant="top" src={`data:image/jpeg;base64,${props.Book.image}`} ></img></Col>
        
        
        <Col>Opis</Col>   
        <Col></Col>
        <Col></Col>
        <Col>Szczególy:</Col>
        <Col></Col>
        <Col>Cena</Col>
        <Col></Col>
        <Col></Col>
        
        <Col> <Button variant="primary" type="submit" >
                Zakup
              </Button>
              </Col>
      </Row>
       

       
        
      
    </Container>
       
    </div>
  )
}

export default BookReadMore