import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Project = ({ name, description, users, addedOn }) => {
  const addDate = moment(addedOn).format("MMM DD, YYYY - h:mma");
  return (
    <>
      <br />
      <Card>
        <Card.Header>(add category here)</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{addDate}</Card.Footer>
      </Card>
    </>
  );
};

export default Project;
