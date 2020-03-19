import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { CommentBadge, LikeBadge, HandshakeBadge } from "./Badges";

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

  const [owner, ...collaborators] = users;

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
          <span className="project-date">
            Started on {addDate} by {owner.name}
          </span>
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <Link to={`projects/${id}`}>{name}</Link>
          </Card.Title>

          <Card.Text>{description}</Card.Text>
          {/* <hr /> */}
          {/* {renderCollaborators()} */}
        </Card.Body>

        <Card.Footer className="text-muted">
          {/* <Link to={`projects/${id}`}>view project</Link> */}
          {project.online ? "Online Project" : `${owner.city}, ${owner.state}`}

          <span className="like-comment-badges">
            <HandshakeBadge collaborators={collaborators.length} />
            <LikeBadge reactions={reactions} />
            <CommentBadge comments={comments} />
          </span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProjectCard;
