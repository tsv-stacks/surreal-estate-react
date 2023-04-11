import React, { useState } from 'react';
import '../styles/add-property.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: '',
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
  };

  return (
    <div className="add-property">
      <h2>Add Property Page</h2>
      <form className="add-property__form" onSubmit={handleAddProperty}>
        <label htmlFor="add-property__title">
          <input
            type="text"
            className="add-property__form-text"
            value={fields.title}
            id="add-property__title"
            onChange={handleFieldChange}
            name="title"
          />
        </label>
        <label htmlFor="add-property__city">
          <select
            name="city"
            id="add-property__city"
            onChange={handleFieldChange}
            value={fields.city}
          >
            <option value="" disabled selected>
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
        <button className="add-property__form-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddProperty;
