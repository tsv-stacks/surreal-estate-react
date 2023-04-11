import React, { useState } from 'react';
import '../styles/add-property.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
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
        <input
          type="text"
          className="add-property__form-text"
          value={fields.title}
          id="add-property__title"
          onChange={handleFieldChange}
          name="title"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddProperty;
