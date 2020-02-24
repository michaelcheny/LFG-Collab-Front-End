import React from "react";

const Project = ({ name, description, users }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <div>
        Collaborators:{" "}
        {users.map(user => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
