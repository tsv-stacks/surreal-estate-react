import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';

const Properties = () => {
  const { search } = useLocation();

  const [alert, setAlert] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });
  const [properties, setProperties] = useState([]);
  const [uniqueCityArray, setUniqueCityArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://surreal-estate-var1.onrender.com/api/v1/PropertyListing${search}`
      )
      .then((res) => {
        const { data } = res;
        setProperties(data);
        setAlert((prev) => ({
          ...prev,
          message: 'Page Refreshed.',
          isSuccess: true,
          isLoading: false,
        }));
      })
      .catch(() => {
        setAlert((prev) => ({
          ...prev,
          message: 'Error. Please Refresh the page or try again later.',
          isSuccess: false,
          isLoading: false,
        }));
      });
  }, [search]);

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
        setProperties(data);
        setAlert((prev) => ({
          ...prev,
          message: 'Page Refreshed.',
          isSuccess: true,
          isLoading: false,
        }));
        const citiesSelected = data.map((proper) => proper.city);
        const uniqueCities = [...new Set(citiesSelected)].sort();
        setUniqueCityArray(uniqueCities);
      })
      .catch(() => {
        setAlert((prev) => ({
          ...prev,
          message: 'Server Error. Please Refresh the page or try again later.',
          isSuccess: false,
          isLoading: false,
        }));
      });
  }, []);

  return (
    <div className="property-sidebar-container flex">
      <SideBar uniqueCityArray={uniqueCityArray} />
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
