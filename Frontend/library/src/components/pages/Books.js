import React, { useState } from 'react'
import {Table,Button} from 'react-bootstrap'
import './Books.css'

function Books() {
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
          alert(error);
        });
      }

    const element = books.map(x=>{
       return( <div> Id:{x.id}, Name: {x.name}</div>)
    }
    )


   // console.log(books.isAvailable);



  return (
    

<div className='Books'>
    <form className='BooksForm'>
{(books.length>0) &&(
    <Table striped bordered hover variant="dark"  className='Table'>
<thead>
    <tr>
        
        <th>Id</th>
        <th>Name</th>

    </tr>
</thead>

<tbody>
    {books.map((book)=>(
        <tr key={book.id}>
            <td>{book.name}</td>
        </tr>
    ))}
    
</tbody>


</Table>
)}
<div className="d-grid gap-2">
<Button onClick={getBooks} className="Button" variant="primary">Get Books  </Button>
</div>
</form>
    </div>

  )
}

export default Books