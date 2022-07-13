import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarApp from './components/NavbarApp';

import Books from './components/pages/Books';
import AddBook from './components/pages/AddBook';

function App() {
  return (
    <>
      <Router>
        <NavbarApp></NavbarApp>
        <Routes>
        <Route path="/Books" element={<Books  />} />
        <Route path="/AddBook" element={<AddBook  />} />
        </Routes>
      </Router>
    </>

    
  );
}

export default App;
