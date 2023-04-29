import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });

  console.log('rendered properties', properties);

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

  return (
    <div className="property-sidebar-container flex">
      <SideBar properties={properties} />
      <div className="property-container__title-grid">
        <div className="prop-title-load">
          <h2 className="prop-title-load__title">Properties</h2>
          {alert.message && (
            <Alert className="prop-title-load__loader" alert={alert} />
          )}
        </div>
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
    </div>
  );
};

export default Properties;
