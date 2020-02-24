import React from "react";

const Project = ({ name, description, users }) => {
  return (
    <div className="project-cards">
      <p>{name}</p>
      <p>{description}</p>
      <ul>
        Collaborators:{" "}
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
