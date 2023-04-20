import React from 'react';
import '../styles/Alert.css';

const Alert = ({ alert }) => {
  const { isSuccess, message, isLoading } = alert;

  let boxStyle = {
    backgroundColor: isSuccess ? '#e6ffe6' : '#ffe6e6',
    color: isSuccess ? '#006600' : '#cc0000',
    border: '2px double',
    borderColor: isSuccess ? '#006600' : '#cc0000',
  };

  if (isLoading) {
    boxStyle = {
      backgroundColor: '#e9c46a',
      color: '#bc6c25',
      border: '2px double',
      borderColor: '#bc6c25',
    };
  }

  return (
    <div className="alert">
      <h4 className="alert__message" style={boxStyle}>
        {message}
      </h4>
    </div>
  );
};

export default Alert;
