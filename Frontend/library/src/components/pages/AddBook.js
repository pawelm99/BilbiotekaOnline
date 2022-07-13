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

  <>
  <input type="file" onChange ={handleChangeFile}/>
  <input type="button" value="upload" onClick={handleSubmit}/>
  </>
  )
}

export default AddBook