import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import AddProperty from './AddProperty';
import Navbar from './Navbar';
import Properties from './Properties';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Properties />} />
      <Route path="add-property" element={<AddProperty />} />
    </Routes>
  </BrowserRouter>
);

export default App;
