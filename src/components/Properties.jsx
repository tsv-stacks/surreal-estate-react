import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });

  console.log(properties);

  useEffect(() => {
    setAlert((prev) => ({
      ...prev,
      message: 'Loading...',
      isLoading: true,
      isSuccess: false,
    }));

    axios
      .get('https://surreal-estate-var1.onrender.com/api/v1/PropertyListing')
      .then((res) => {
        const { data } = res;
        setProperties(() => [...data]);
        setAlert((prev) => ({
          ...prev,
          message: 'Page Refreshed.',
          isSuccess: true,
          isLoading: false,
        }));
        setTimeout(() => {
          setAlert((prev) => ({
            ...prev,
            message: '',
            isSuccess: false,
            isLoading: false,
          }));
        }, 3000);
      })
      .catch(() => {
        setAlert((prev) => ({
          ...prev,
          message: 'Server Error. Please Refresh the page or try again later.',
          isSuccess: false,
          isLoading: false,
        }));
        setTimeout(() => {
          setAlert((prev) => ({
            ...prev,
            message: '',
            isSuccess: false,
            isLoading: false,
          }));
        }, 3000);
      });
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
      <h2>Properties</h2>
      {alert.message && <Alert alert={alert} />}
      <div className="prop-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard props={property} key={property._id} />
          ))
        ) : (
          <p>No Properties</p>
        )}
      </div>
    </div>
  );
};

export default Properties;
