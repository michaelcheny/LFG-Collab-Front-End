import React from "react";
import LikeButton from "./LikeButton";
import Joinbutton from "../components/JoinButton";

import Card from "react-bootstrap/Card";

const ProjectInfo = ({ project }) => {
  console.log(project);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {project.category ? project.category.name : null}
          </Card.Subtitle>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>
            <Joinbutton /> {"  "}
            <LikeButton />
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <br />
      <br />
      <br /> */}
    </div>
  );
};

export default ProjectInfo;
