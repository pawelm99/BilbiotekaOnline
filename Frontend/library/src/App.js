import React, { useState } from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarApp from './components/NavbarApp';

import Books from './components/Books';
import AddBook from './components/pages/AddBook';
import Cards from './components/pages/Cards';
import Login from './components/pages/Login';
import BookReadMore from './components/pages/BookReadMore';




class App extends React.Component {

  state = { 
    Book:Object,
    
  }
  
  paramsFun(bookObj)
  {
    console.log("Fun paramsFun")
    this.setState({Book : bookObj })
  }
  render()
  {
  return (
    <>
      <Router>
        <NavbarApp/>
        <Routes>
        <Route path="/BookReadMore" element={<BookReadMore Book={this.state.Book}/> }/>
        <Route path="/AddBook" element={<AddBook  />} />
        <Route path="/Cards" element={<Cards  paramsFun={this.paramsFun.bind(this)}/>} />
        <Route path='/Login' element={<Login/>}/>
        
        
        </Routes>
      </Router>
    </>

    
  );
  }
}

export default App;
