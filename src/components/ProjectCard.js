import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import moment from "moment";
import ProjectBadges from "./ProjectBadges";

const ProjectCard = ({ authenticated, project }) => {
  // console.log(project);
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

  // const handleJoinProject = () => {
  //   console.log("clicked");
  // };

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

          <ProjectBadges comments={comments} reactions={reactions} />

          {/* <Button className="button" variant="dark" size="sm">
            <span role="img" aria-label="chat-bubble">
              💬
            </span>
            <Badge variant="light">{comments.length}</Badge>
          </Button>{" "}
          <Button
            className="button"
            variant="dark"
            // disabled={!authenticated}
            size="sm"
            // onClick={handleJoinProject}
          >
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            <Badge variant="light">{reactions.length}</Badge>
          </Button> */}
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProjectCard;
