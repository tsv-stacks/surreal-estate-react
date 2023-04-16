import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('https://surreal-estate-var1.onrender.com/api/v1/PropertyListing')
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  const validProps = {
    _id: '64385ef73680b366284f9d40',
    title: 'Big House',
    city: 'Birmingham',
    type: 'Cottage',
    bedrooms: '2',
    bathrooms: '2',
    price: '100000',
    email: 'tsv@Stacks',
    __v: 0,
  };

  return (
    <div>
      <h2>Properties Page</h2>
      <PropertyCard props={validProps} />
    </div>
  );
};

export default Properties;
