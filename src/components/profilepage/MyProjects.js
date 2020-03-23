import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
  CommentBadge,
  LikeBadge,
  HandshakeBadge,
  OnlineBadge
} from "../Badges";

const MyProjects = ({ projects }) => {
  console.log(projects);

  const renderProjects = () => {
    return projects.map(project => {
      return (
        <div>
          <Card border="light">
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {project.category.name}
              </Card.Subtitle>
              <Card.Text>{project.description}</Card.Text>
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
    });
  };

  return (
    <div>
      <h5 className="account-page-tile">My Projects</h5>
      {renderProjects()}
      <br></br>
    </div>
  );
};

export default MyProjects;
