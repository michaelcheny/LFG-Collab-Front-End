import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { CommentBadge, LikeBadge, HandshakeBadge } from "../Badges";

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

  const owner = users.find(user => user.id === project.owner_id);
  const collaborators = users.filter(user => user.id !== project.owner_id);

  const addDate = moment(created_at).format("MMM DD, YYYY");

  return (
    <>
      <br />
      <Card bg="light" className="project-card">
        <Card.Header className="smaller-text">
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
        </Card.Body>

        <Card.Footer className="text-muted smaller-text">
          {project.online ? "Online Project" : `${owner.city}, ${owner.state}`}

          <span className="like-comment-badges">
            <HandshakeBadge
              collaborators={users.length}
              teamSize={project.team_size}
            />
            <LikeBadge reactions={reactions} />
            <CommentBadge comments={comments} />
          </span>
        </Card.Footer>
      </Card>
      {console.log(owner)}
    </>
  );
};

export default ProjectCard;
