import React from "react";

const ProjectInfo = ({ project }) => {
  console.log(project);
  return (
    <div>
      <h2>{project.name}</h2>
      {project.description}
      <br />
    </div>
  );
};

export default ProjectInfo;
