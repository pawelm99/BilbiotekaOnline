import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Login.css'
const Login = (props) => {
    
    const initialData = Object.freeze({
        login: 'Login',
        password: 'Password'
      });
  
  
      const [formData,setfromData] = useState(initialData)
      const [token,setToken] = useState([]);
  
      const handleChange = (e) =>{
          setfromData({
              ...formData,
              [e.target.name]: e.target.value,
              
          })
       
      }
  
      const handleSubmit = (e) =>{
          e.preventDefault();

          const userLogin ={
              Login: formData.login,
              Password: formData.password
          };
          console.log(userLogin)
        
     
  
          const url = 'http://localhost:5157/Account';
  
          fetch(url,{
              method:"POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userLogin)
          })
          .then(res =>res.json()
  
          )
          .then(resFromServer =>{
              console.log(resFromServer);
            
              setToken(resFromServer);
              var userStr = JSON.stringify(resFromServer);
              var a = userStr.length-2;
              var tokenUser = userStr.slice(10,a);
              props.onUserToken(tokenUser);
          })
          .catch((error)=>{
              console.log(error);
              alert(error);
          })
          
      
          props.onUserLogin(userLogin);
  
         
         
      }
  

         
      return (
        <div>
            <h1>Login Page</h1>
          <div className='Login'>
            <Form>
              <Form.Group className="mb-3" controlId="login">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={formData.login} name="login" type="text" onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your login with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control value={formData.password} name="password" type="password" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
            </div>
            </div>
          );
        }
        

export default Login;