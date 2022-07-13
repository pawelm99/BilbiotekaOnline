import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  return  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`data:image/jpeg;base64,${book.image}`} />
  <Card.Body>
    <Card.Title>{book.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
})
  return (
    
   
   
   <div class="container">
  <div class="row row-cols-4">
  {(books.length===0) &&(getBooks()) }
 {element}

  </div>
</div>

  );
  
}

export default Cards;