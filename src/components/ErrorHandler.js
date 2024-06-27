import React from 'react';

const ErrorHandler = ({ error }) => {
  return error ? <div className="error-message">Error: {error.message}</div> : null;
};

export default ErrorHandler;