import React from "react";
import LikeButton from "./LikeButton";

const ProjectInfo = ({ project }) => {
  console.log(project);
  return (
    <div>
      <h2>{project.name}</h2>
      {project.description}
      <LikeButton
        comments={project.comments}
        reactions={project.reactions}
        projectId={project.id}
      />
      {/* // <br /> */}
    </div>
  );
};

export default ProjectInfo;
