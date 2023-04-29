import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css';

const SideBar = ({ properties }) => {
  console.log('sidebar', properties);

  const [propertiesArray, setPropertiesArray] = useState([]);
  // set new state for unique cities use that to render input
  const [sidebarCities, setSidebarCities] = useState({});

  useEffect(() => {
    setPropertiesArray(properties);
  }, [properties]);

  useEffect(() => {
    if (propertiesArray.length > 0) {
      const citiesSelected = propertiesArray.map((property) => property.city);
      const uniqueCities = [...new Set(citiesSelected)];
      console.log(uniqueCities);
      const citiesObject = uniqueCities.reduce(
        (obj, city) => ({ ...obj, [city]: false }),
        {}
      );
      setSidebarCities(() => ({
        ...citiesObject,
      }));
      console.log(sidebarCities);
    } else {
      console.log('no cities found');
    }
  }, [propertiesArray]);
  // create select input for cities

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
  // oncheck
  console.log(sidebarCities);
  // when state changes, run use effect to make api call

  // if all options unchecked add logic to make normal request

  // pass properties into sidebar as props

  // create link to create input, pass props

  // map through and use only first instance of city to prevent duplicate

  // use location hook

  return (
    <nav className="sidebar">
      <h3>Sidebar</h3>
      <p>{propertiesArray.length}</p>
      <form>
        {/* {propertiesArray.length > 0 && (
          <div className="wrapper">
            {sidebarCities.map((sideCity) => (
              <label htmlFor="sidebar__input">
                <input type="checkbox" name="" id="" />
                <p>{sideCity}</p>
              </label>
            ))}
          </div>
        )} */}
      </form>
    </nav>
  );
};

export default SideBar;
