import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import moment from "moment";

const Project = ({
  // id,
  // name,
  // description,
  // users,
  // addedOn,
  // category,
  authenticated,
  project
}) => {
  // const addDate = moment(addedOn).format("MMM DD, YYYY - h:mma");
  console.log(project);
  const { id, name, description, users, created_at, category } = project;
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

  const handleJoinProject = () => {
    console.log("clicked");
  };

  return (
    <>
      <br />
      <Card>
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
          <Button
            variant="dark"
            disabled={!authenticated}
            size="sm"
            onClick={handleJoinProject}
          >
            Join Project
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Project;
