import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import  './CardsStyle.css';

function Cards() {

  const [books,setBooks]=useState([]);

function getBooks(){

    const url = 'http://localhost:5169/Books';
    fetch(url,{
      method:'GET'
    })
    .then(res=> res.json())
    .then(useFromServer =>{
      console.log(useFromServer);
      setBooks(useFromServer);
    })
    .catch((error)=>{
      console.log(error);
      
    });
  
  
}
const element = books.map(book=>{
  return    <Col>
        <Card style={{ width: '11rem' }}>
  <Card.Img className='imageCard' variant="top" src={`data:image/jpeg;base64,${book.image}`} />
  <Card.Body>
    <Card.Title>{book.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>



})
  return (
    
   
   <div className='Cards'>
   <div class="container">
  <div class="row row-cols-4">
  <Container>
  <Row xs={1} md={4}>
 
  {(books.length===0) &&(getBooks()) } 
  
 {element}
  </Row>
    </Container>

  </div>
</div>
</div>
  );
  
}

export default Cards;