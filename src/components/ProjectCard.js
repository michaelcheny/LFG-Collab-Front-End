import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { CommentBadge, LikeBadge } from "./Badge";

const ProjectCard = ({ authenticated, project }) => {
  const {
    id,
    name,
    description,
    users,
    created_at,
    category,
    comments,
    reactions
  } = project;

  const addDate = moment(created_at).format("MMM DD, YYYY");

  const renderCollaborators = () => {
    return (
      <ul>
        Collaborators:
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <br />
      <Card bg="light" border="light">
        <Card.Header>
          {category.name}
          <span className="project-date">{addDate}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Link to={`projects/${id}`}>{name}</Link>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <hr />
          {renderCollaborators()}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to={`projects/${id}`}>view project</Link>
          <LikeBadge reactions={reactions} />
          <CommentBadge comments={comments} />
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProjectCard;
