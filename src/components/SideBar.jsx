import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from '../assets/search.svg';

const qs = require('qs');

const SideBar = ({ uniqueCityArray }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [propertiesArray, setPropertiesArray] = useState([]);
  const [query, setQuery] = useState('');
  // const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    setPropertiesArray(uniqueCityArray);
  }, [uniqueCityArray]);

  // const handleChange = (event) => {
  //   const { value, checked, name } = event.target;
  //   console.log(value, checked, name);
  //   setSelectedCities((prevState) => {
  //     if (prevState.includes(name)) {
  //       return prevState.filter((city) => city !== name);
  //     }
  //     return [...prevState, name];
  //   });
  //   console.log(selectedCities);
  // };

  const buildQueryString = (operation, valueObj) => {
    const { search } = location;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    console.log(currentQueryParams);
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString('query', {
      title: { $regex: query },
    });
    console.log(newQueryString);
    navigate(newQueryString);
  };

  return (
    <nav className="sidebar">
      <form className="sidebar-text-search" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title..."
        />
        <button type="submit">
          <Search />
        </button>
      </form>

      <h3 className="sidebar-city__title">Filter by city:</h3>
      <form>
        {propertiesArray.length > 0 && (
          <div className="sidebar-city">
            {propertiesArray.map((sideCity) => (
              <label
                key={sideCity}
                className="sidebar-city__label"
                htmlFor={`sidebar-city__input-${sideCity}`}
              >
                <Link
                  className="sidebar-city__link"
                  to={buildQueryString('query', { city: `${sideCity}` })}
                >
                  <input
                    type="checkbox"
                    name={`${sideCity}`}
                    id={`sidebar-city__input-${sideCity}`}
                    className="sidebar-city__input"
                    // onChange={handleChange}
                    defaultChecked={false}
                  />
                  <span className="sidebar-city__name">{sideCity}</span>
                </Link>
              </label>
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
