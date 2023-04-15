import React from 'react';
import '../styles/Alert.css';

const Alert = ({ alert }) => {
  const { isSuccess, message, isLoading } = alert;
  console.log(isSuccess, message);

  const boxStyle = {
    backgroundColor: isSuccess ? '#e6ffe6' : '#ffe6e6',
    color: isSuccess ? '#006600' : '#cc0000',
    border: '2px double',
    borderColor: isSuccess ? '#e6ffe6' : '#ffe6e6',
  };
  return (
    <div className="alert">
      <h4 className="alert__message" style={boxStyle}>
        {message}
      </h4>
    </div>
  );
};
export default Alert;
