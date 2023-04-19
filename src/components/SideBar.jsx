import React from 'react';
import '../styles/Sidebar.css';

const SideBar = () => {
  console.log('sidebar');
  // create form state

  // create select input for cities

  // make axios request on change using :
  // https://surreal-estate-var1.onrender.com/api/v1/PropertyListing?query={"city":["Manchester"]}

  // oncheck

  // when state changes, run use effect to make api call

  // if all options unchecked add logic to make normal request

  // pass properties into sidebar as props

  // create link to create input, pass props

  // map through and use only first instance of city to prevent duplicate

  // use location hook

  return (
    <nav className="sidebar">
      <h3>Sidebar</h3>
    </nav>
  );
};

export default SideBar;
