import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a comment:</Form.Label>
        <Form.Control as="textarea" rows="3" />
        <Button className="button" variant="dark" type="submit">
          Post comment
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CommentForm;
