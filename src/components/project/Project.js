import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import moment from "moment";

const Project = ({
  id,
  name,
  description,
  users,
  addedOn,
  category,
  authenticated
}) => {
  // const addDate = moment(addedOn).format("MMM DD, YYYY - h:mma");
  const addDate = moment(addedOn).format("MMM DD, YYYY");

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

  // const renderButton = () => {
  //   return (
  //     <Button variant="dark" disabled={!authenticated} size="sm">
  //           Join Project
  //         </Button>
  //   )
  // }
  // }

  return (
    <>
      <br />
      <Card>
        <Card.Header>
          {category}
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
          <Button variant="dark" disabled={!authenticated} size="sm">
            Join Project
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Project;
