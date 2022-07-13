import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import './AddBook.css'
import axios from 'axios'


function AddBook() {
    const initialData = Object.freeze({
        name:"title",
        
      });
  
    const [formData,setfromData] = useState(initialData);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    
  
    function handleChangeFile(e) {
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)

    }
    

    const handleChange = (e) =>{
        setfromData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        
         

    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
       
        const form = new FormData();
        form.append("name",formData.name)
        form.append("formFile",file);
        form.append("fileName",fileName);

        try{
          const res = await axios.post('http://localhost:5169/Books',form)
          console.log(res);

        }catch (ex){
          console.log(ex);
        }


}   
    const onCreateBook = (createBook)=>{
        if(createBook != null)
        {
            alert("Create book successful")
        }
        else
        {
            console.log("Bad create book")
        }
    }
  
  return (

    <div className='BookCreate'>
        <form className='BookCreateForm'>
            <h2>Add Book</h2>
    <Form >
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control value={formData.name} onChange={handleChange} type="text" name='name' placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formFile">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={handleChangeFile}   />
  </Form.Group>
  <Button onClick={handleSubmit} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</form>
</div>
  )
}

export default AddBook