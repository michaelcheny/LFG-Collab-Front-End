import React from "react";
import LikeButton from "./LikeButton";

const ProjectInfo = ({ project }) => {
  console.log(project);

  const renderCollaborators = () => {
    if (project.users) {
      return project.users.map(user => {
        return <li className="collaborator-list">{user.name}</li>;
      });
    }
  };

  return (
    <div>
      <h2>{project.name}</h2>
      {project.description}
      <br />
      <br />
      Collaborators:
      {renderCollaborators()}
      <LikeButton />
    </div>
  );
};

export default ProjectInfo;
