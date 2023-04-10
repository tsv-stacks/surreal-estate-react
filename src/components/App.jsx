import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import Navbar from './Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route />
    </Routes>
  </BrowserRouter>
);

export default App;
