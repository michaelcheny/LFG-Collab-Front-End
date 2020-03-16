import React from "react";
import LikeButton from "./LikeButton";

const ProjectInfo = ({ project }) => {
  // console.log(project);
  return (
    <div>
      <h2>
        {project.name} <LikeButton />
      </h2>
      {project.description}
    </div>
  );
};

export default ProjectInfo;
