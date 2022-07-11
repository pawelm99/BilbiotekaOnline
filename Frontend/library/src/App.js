import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarApp from './NavbarApp';
function App() {
  return (
    <>
      <Router>
        <NavbarApp></NavbarApp>
        
      </Router>
    </>
  );
}

export default App;
