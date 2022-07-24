import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import  './CardsStyle.css';
import BookReadMore from './BookReadMore';
import ListGroup from 'react-bootstrap/ListGroup';


function Cards(props) {
  const initialData = Object.freeze({
    select: 'bled',
  });
  

  const [books,setBooks]=useState([]);
  const [bookClick,setBookClick]=useState();
  const [formData,setfromData]=useState(initialData);

  const handleChange = (e) =>{
    setfromData({
        ...formData,
        [e.target.name]: e.target.value,
        
    })
  console.log(formData)
  }
  
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
  return   <Col>
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
</Col>})

function Showme()
{
  console.log("asdas")
}


  return (
    
   
   <div className='h1_text'>
     <h3>Wszystkie</h3>
   <div class="container">
  <div class="row row-cols-4">
  <div className='Kategoria'>
<h5>Kategorie</h5>
<div className='cat'>
<ListGroup.Item action href="/Login">Wszystkie</ListGroup.Item>
<ListGroup.Item action href="#link2">Wszystkie</ListGroup.Item>
<ListGroup.Item action href="#link3">Wszystkie</ListGroup.Item>
<ListGroup.Item action href="#link4">Wszystkie</ListGroup.Item>
<ListGroup.Item action href="#link5">Wszystkie</ListGroup.Item>
<p>Kryminał</p>
<p>Fantastyka i sci-fi</p>
<p>Obyczajowe i romanse</p>
<p>Sensacja, thriller, horror</p>
<p>Literatura faktu, reportaże, biografie</p>
<p>Dla dzieci i młodzieży</p>
<p>Biznes, rozwój, prawo</p>
<p>Humanistyka</p>
<p>Języki obce</p>
<p>Nauka i nowe technologie</p>
<p>Poradniki</p>
<p>Styl życia</p>
<p>Religia i duchowość</p>
<p>Aktualności</p>
<p>Edukacja</p>
<p>Poezja i dramat</p>
<p>Darmowe</p>
</div>
  
  </div>
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