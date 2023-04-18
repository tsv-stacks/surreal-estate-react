import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '../styles/app.css';
import AddProperty from './AddProperty';
import Navbar from './Navbar';
import Properties from './Properties';
import data from '../assets/api-res.json';

const App = () => {
  console.log('rendered app');
  const [imgArray, setImgArray] = useState([]);
  useEffect(() => {
    const imageArray = data.map((imgData) => ({
      alt_description: imgData.alt_description,
      url: imgData.urls.thumb,
      id: imgData.id,
    }));
    setImgArray(() => [...imageArray]);
  }, []);

  // useEffect(() => {
  //   const { REACT_APP_ACCESS_KEY } = process.env;
  //   axios
  //     .get(
  //       `https://api.unsplash.com/collections/GCyCJj5W01o/photos/?client_id=${REACT_APP_ACCESS_KEY}&page=${
  //         Math.floor(Math.random() * 2) + 1
  //       }&per_page=30`
  //     )
  //     .then((res) => {
  //       const imageArray = res.data.map((imgData) => ({
  //         alt_description: imgData.alt_description,
  //         url: imgData.urls.thumb,
  //         id: imgData.id,
  //       }));
  //       console.log(imageArray);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty props={imgArray} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
