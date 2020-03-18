import React from "react";
import LikeButton from "./LikeButton";
import Card from "react-bootstrap/Card";

const ProjectInfo = ({ project }) => {
  console.log(project);

  const renderCollaborators = () => {
    if (project.users) {
      // return <li className="collaborator-list">{user.name}</li>;

      return (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            {project.users.map(user => {
              return (
                <Card.Text>
                  <li className="collaborator-list">{user.name}</li>
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>
      );
    }
  };

  return (
    <div>
      <h2>{project.name}</h2>
      <hr />
      {project.description}
      <br />
      <br />
      <br />
      {/* {renderCollaborators()} */}
      {/* <LikeButton /> */}
    </div>
  );
};

export default ProjectInfo;
