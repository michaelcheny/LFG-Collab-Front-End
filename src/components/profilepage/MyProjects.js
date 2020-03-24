import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
  CommentBadge,
  LikeBadge,
  HandshakeBadge,
  OnlineBadge
} from "../Badges";

const MyProjects = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  const renderProjects = () => {
    return (
      <div>
        <Card border="light">
          <Card.Body>
            <div onClick={() => setShowDescription(!showDescription)}>
              <Card.Title>{project.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {project.category.name}
              </Card.Subtitle>
            </div>

            {showDescription ? (
              <Card.Text>{project.description}</Card.Text>
            ) : null}

            <Link to={`/projects/${project.id}`}>Visit project</Link>
            <span className="project-date">
              <LikeBadge reactions={project.reactions} />
              <CommentBadge comments={project.comments} />
              <HandshakeBadge
                collaborators={project.users.length}
                teamSize={project.team_size}
              />
              <OnlineBadge project={project} />
            </span>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div>
      {renderProjects()}
      <br></br>
    </div>
  );
};

export default MyProjects;
