import React, { useState } from 'react';
import '../styles/add-property.css';
import axios from 'axios';
import Alert from './Alert';
import data from '../assets/api-res.json';

const AddProperty = ({ props }) => {
  console.log(props);
  console.log('rendered');
  const initialState = {
    fields: {
      title: '',
      city: '',
      type: '',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: '',
      img: 'https://raw.githubusercontent.com/tsv-stacks/surreal-estate-react/propcard/src/assets/placeholder.png',
    },
  };
  // new state for image, setimage, conditional add image state to field state
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });
  // use effect axios, get, []
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    return setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // function getRandomImage(data) {
  //   const cleanArray =
  //   const randomNumber = Math.floor(Math.random() * data.length);
  // }

  // console.log(dataManip(data));

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
    setAlert((prev) => ({
      ...prev,
      message: 'Loading...',
      isLoading: true,
      isSuccess: false,
    }));
    axios
      .post(
        'https://surreal-estate-var1.onrender.com/api/v1/PropertyListing',
        fields
      )
      .then(() => {
        setAlert((prev) => ({
          ...prev,
          message: 'Property Added.',
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
        }, 5000);
      })
      .catch(() => {
        setAlert((prev) => ({
          ...prev,
          message: 'Server Error. Please try again later.',
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
        }, 5000);
      });
  };

  return (
    <div className="add-property">
      <h2 className="add-property__title">Add Property</h2>
      <form className="add-property__form" onSubmit={handleAddProperty}>
        {alert.message && <Alert alert={alert} />}
        <label htmlFor="add-property__form-title">
          <p className="add-property__form-label">Property Title</p>
          <input
            type="text"
            className="add-property__form-text"
            value={fields.title}
            id="add-property__form-title"
            onChange={handleFieldChange}
            name="title"
          />
        </label>

        <label htmlFor="add-property__form-city">
          <p className="add-property__form-label">Property city</p>
          <select
            required
            name="city"
            id="add-property__form-city"
            onChange={handleFieldChange}
            value={fields.city}
          >
            <option value="" disabled>
              -- CHOOSE CITY --
            </option>
            <option value="London">London</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Glasgow">Glasgow</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Bristol">Bristol</option>
            <option value="Manchester">Manchester</option>
            <option value="Sheffield">Sheffield</option>
          </select>
        </label>

        <label htmlFor="add-property__form-type">
          <p className="add-property__form-label">Property type</p>
          <select
            name="type"
            id="add-property__form-type"
            onChange={handleFieldChange}
            value={fields.type}
          >
            <option value="" disabled>
              -- PROPERTY TYPE --
            </option>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="add-property__form-bedrooms">
          <p className="add-property__form-label">No. of Bedrooms</p>
          <input
            type="number"
            onChange={handleFieldChange}
            id="add-property__form-bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            min={1}
            max={20}
          />
        </label>

        <label htmlFor="add-property__form-bathrooms">
          <p className="add-property__form-label">No. of Bathrooms</p>
          <input
            type="number"
            onChange={handleFieldChange}
            id="add-property__form-bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            min={1}
            max={20}
          />
        </label>

        <label htmlFor="add-property__form-price">
          <p className="add-property__form-label">Property Value</p>
          £
          <input
            type="number"
            onChange={handleFieldChange}
            id="add-property__form-price"
            name="price"
            value={fields.price}
            min={0.01}
            step={0.01}
          />
        </label>

        <label htmlFor="add-property__form-email">
          <p className="add-property__form-label">Email Address</p>
          <input
            type="email"
            className="add-property__form-text"
            value={fields.email}
            id="add-property__form-email"
            onChange={handleFieldChange}
            name="email"
          />
        </label>

        <fieldset className="add-property__form-fieldset">
          <legend className="add-property__form-fieldset-legend">
            Choose Image Source
          </legend>

          <label
            className="add-property__form-radio-label add-property__form-radio-label__disabled"
            htmlFor="add-property__form-radio-upload"
            title="Coming Soon..."
          >
            <input
              className="add-property__form-radio"
              type="radio"
              name="add-property__form-radio"
              id="add-property__form-radio-upload"
              disabled
            />
            Upload Image
          </label>

          <label
            className="add-property__form-radio-label"
            htmlFor="add-property__form-radio-random"
          >
            <input
              className="add-property__form-radio"
              type="radio"
              name="add-property__form-radio"
              id="add-property__form-radio-random"
            />
            Random Image
          </label>

          <label
            className="add-property__form-radio-label"
            htmlFor="add-property__form-radio-default"
          >
            <input
              className="add-property__form-radio"
              type="radio"
              name="add-property__form-radio"
              id="add-property__form-radio-default"
            />
            Default Image
          </label>
        </fieldset>

        {/* image source : new state var - img  add handler - onCheck */}
        <button className="add-property__form-btn" type="submit">
          Add Property
        </button>
      </form>
    </div>
  );
};
export default AddProperty;
