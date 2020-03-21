import React from "react";
import Alert from "react-bootstrap/Alert";

const ErrorBox = ({ errors }) => {
  const renderErrors = () => {
    return errors.map(error => {
      return <li>{error}</li>;
    });
  };

  return <Alert variant="danger">{renderErrors()}</Alert>;
};

export default ErrorBox;
