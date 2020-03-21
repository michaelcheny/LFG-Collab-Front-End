import React from "react";
import Alert from "react-bootstrap/Alert";

const ErrorBox = ({ errors }) => {
  const renderErrors = () => {
    return errors.map((error, index) => {
      return <li key={index}>{error}</li>;
    });
  };

  // const render = () => {
  //   return setInterval(() => {
  //     return <Alert variant="danger">{renderErrors()}</Alert>;
  //   }, 5000);
  // };

  // return <>{render()}</>;
  return <Alert variant="danger">{renderErrors()}</Alert>;
};

export default ErrorBox;
