import React from "react";
import Spinner from "react-bootstrap/Spinner";

export const LoadingSpinner = () => {
  return (
    <>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </>
  );
};
