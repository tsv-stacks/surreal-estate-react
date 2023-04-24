import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ properties }) => {
  console.log('sidebar', properties);

  const [selectedProps, setSelectedProps] = useState([]);

  const [propertiesArray, setPropertiesArray] = useState([]);
  const [uniqueCityArray, setUniqueCityArray] = useState([]);
  const [sidebarCities, setSidebarCities] = useState({});

  useEffect(() => {
    setPropertiesArray(properties);
  }, [properties]);

  useEffect(() => {
    if (propertiesArray.length > 0) {
      const citiesSelected = propertiesArray.map((property) => property.city);
      const uniqueCities = [...new Set(citiesSelected)].sort();
      const citiesObject = uniqueCities.reduce(
        (obj, city) => ({ ...obj, [city]: false }),
        {}
      );
      setSidebarCities(() => ({
        ...citiesObject,
      }));
      setUniqueCityArray(() => [...uniqueCities]);
      console.log(sidebarCities);
    } else {
      console.log('no cities found');
    }
  }, [propertiesArray]);

  const handleChange = (event) => {
    const { checked, name } = event.target;
    console.log('check change', event.target.name);
    setSidebarCities((prev) => ({
      ...prev,
      [name]: !checked,
    }));
    console.log(sidebarCities[name]);
  };
  // create select input for cities
  // change state of sidebarCities to:
  // {cityName : "", checkedStatus:}
  //   make axios request on change using :
  // surreal-estate-var1.onrender.com/api/v1/PropertyListing?query={"city":["Manchester"]}

  //   if (sidebarCities.length > 0) {
  //     return sidebarCities.map((sideCity) => (
  //       <label htmlFor="sidebar__input">
  //         <p>City Name</p>
  //         <input type="checkbox" name="" id="" />
  //       </label>
  //     ));
  //   }

  //   console.log(uniqueCityArray, sidebarCities);
  // when state changes, run use effect to make api call

  // if all options unchecked && checked add logic to make normal request

  // create link to create input, pass props

  // use location hook
  // how to update if more than one locatio, hook, use ternary array to pop and push

  return (
    <nav className="sidebar">
      <h3 className="sidebar-city__title">Filter by city:</h3>
      <form>
        {propertiesArray.length > 0 && (
          <div className="sidebar-city">
            {uniqueCityArray.map((sideCity) => (
              <Link
                className="sidebar-city__link"
                to={`/?query={"city":"${sideCity}"}`}
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
                    checked={sidebarCities[sideCity] === true}
                  />
                </label>
              </Link>
            ))}
          </div>
        )}
      </form>
      <p>{propertiesArray.length}</p>
      <p>{uniqueCityArray}</p>
    </nav>
  );
};

export default SideBar;
