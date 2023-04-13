import React, { useState } from 'react';
import '../styles/add-property.css';
import axios from 'axios';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: '',
      type: '',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: '',
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    return setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
    axios
      .post(
        'https://surreal-estate-var1.onrender.com/api/v1/PropertyListing',
        fields
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-property">
      <h2 className="add-property__title">Add Property</h2>
      <form className="add-property__form" onSubmit={handleAddProperty}>
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

        <button className="add-property__form-btn" type="submit">
          Add Property
        </button>
      </form>
    </div>
  );
};
export default AddProperty;
