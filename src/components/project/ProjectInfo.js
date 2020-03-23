import React from "react";
import LikeButton from "../buttons/LikeButton";
import Joinbutton from "../buttons/JoinButton";
import Card from "react-bootstrap/Card";

const ProjectInfo = ({ project }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {project.category ? project.category.name : null}
          </Card.Subtitle>
          <hr />
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>
            <Joinbutton /> {"  "}
            <LikeButton />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectInfo;
