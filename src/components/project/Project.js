import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Project = ({ name, description, users, addedOn, category }) => {
  const addDate = moment(addedOn).format("MMM DD, YYYY - h:mma");
  const cat = category.split("_").join(" ");
  const categoryCapped = cat.charAt(0).toUpperCase() + cat.slice(1);

  const renderCollaborators = () => {
    return (
      <ul>
        Collaborators:
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <br />
      <Card>
        <Card.Header>{categoryCapped}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {renderCollaborators()}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Project;
