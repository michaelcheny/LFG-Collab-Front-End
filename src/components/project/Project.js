import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Project = ({ name, description, users, addedOn }) => {
  return (
    // <div className="project-cards">
    //   <p>{name}</p>
    //   <p>{description}</p>
    //   <ul>
    //     Collaborators:{" "}
    //     {users.map((user, index) => (
    //       <li key={index}>{user.name}</li>
    //     ))}
    //   </ul>
    // </div>
    <>
      <br />
      <Card>
        <Card.Header>(add category here)</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{addedOn}</Card.Footer>
      </Card>
    </>
  );
};

export default Project;
