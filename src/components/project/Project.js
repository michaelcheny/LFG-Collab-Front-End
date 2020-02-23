import React from "react";

const Project = ({ name, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
