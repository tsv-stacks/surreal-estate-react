import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const qs = require('qs');

const SideBar = ({ uniqueCityArray }) => {
  console.log('sidebar', uniqueCityArray);

  const [propertiesArray, setPropertiesArray] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    setPropertiesArray(uniqueCityArray);
  }, [uniqueCityArray]);

  const handleChange = (event) => {
    const { value, checked, name } = event.target;
    console.log(value, checked, name);
    if (selectedCities.includes(name)) {
      setSelectedCities(selectedCities.filter((city) => city !== name));
    } else {
      setSelectedCities([...selectedCities, name]);
    }
    console.log(selectedCities);
  };

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    console.log(search);
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <nav className="sidebar">
      <h3 className="sidebar-city__title">Filter by city:</h3>
      <form>
        {propertiesArray.length > 0 && (
          <div className="sidebar-city">
            {propertiesArray.map((sideCity) => (
              <Link
                className="sidebar-city__link"
                key={sideCity}
                to={buildQueryString('query', { city: `${sideCity}` })}
              >
                <label
                  className="sidebar-city__label"
                  htmlFor={`sidebar-city__input-${sideCity}`}
                >
                  {sideCity}
                  <input
                    type="checkbox"
                    name={`${sideCity}`}
                    id={`sidebar-city__input-${sideCity}`}
                    className="sidebar-city__input"
                    onChange={handleChange}
                    // checked={sidebarCities[sideCity] === true}
                  />
                </label>
              </Link>
            ))}
          </div>
        )}
      </form>
      <div className="sidebar-city__sort">
        <h3 className="sidebar-city__title">Sort by price:</h3>
        <Link to={buildQueryString('sort', { price: -1 })}>High to Low</Link>
        <Link to={buildQueryString('sort', { price: 1 })}>Low to High</Link>
      </div>
    </nav>
  );
};

export default SideBar;
