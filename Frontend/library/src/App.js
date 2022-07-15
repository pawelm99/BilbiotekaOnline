import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarApp from './components/NavbarApp';

import Books from './components/pages/Books';
import AddBook from './components/pages/AddBook';
import Cards from './components/pages/Cards';
import Login from './components/pages/Login';
function App() {
  return (
    <>
      <Router>
        <NavbarApp></NavbarApp>
        <Routes>
        <Route path="/Books" element={<Books  />} />
        <Route path="/AddBook" element={<AddBook  />} />
        <Route path="/Cards" element={<Cards  />} />
        <Route path='/Login' element={<Login/>}/>
        
        </Routes>
      </Router>
    </>

    
  );
}

export default App;
