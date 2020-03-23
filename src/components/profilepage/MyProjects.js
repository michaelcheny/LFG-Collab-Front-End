import React from "react";
import { Link } from "react-router-dom";

const MyProjects = ({ projects }) => {
  console.log(projects);

  const renderProjects = () => {
    return projects.map(project => {
      return <p>{project.name}</p>;
    });
  };

  return (
    <div>
      {renderProjects()}
      <br></br>
    </div>
  );
};

export default MyProjects;
