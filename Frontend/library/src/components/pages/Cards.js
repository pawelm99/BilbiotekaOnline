import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import  './CardsStyle.css';
import BookReadMore from './BookReadMore';


function Cards(props) {

  const [books,setBooks]=useState([]);
  const [bookClick,setBookClick]=useState();

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
function ClickFunReadMore(book)
{
  console.log("hello Is me read more")
  props.paramsFun(book.name)
  

}


const element = books.map(book=>{
  return    <Col>
        <Card style={{ width: '11rem' }}>
  <Card.Img className='imageCard' variant="top" src={`data:image/jpeg;base64,${book.image}`} />
  <Card.Body>
    <Card.Title>{book.name}</Card.Title>
    <Card.Text>
      Autor: Brindefe
    </Card.Text>
    <Card.Text>
      Price: 100 zl
    </Card.Text> 
    <Link to="/BookReadMore">
    <Button variant="primary" onClick={() => props.paramsFun(book)}>Read more</Button>
    </Link>
  </Card.Body>
</Card>
</Col>



})
  return (
    
   
   <div className='h1_text'>
     <h3>Bestsellery</h3>
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