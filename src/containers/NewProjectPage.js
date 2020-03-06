import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class NewProjectPage extends Component {
  state = {
    name: "",
    description: "",
    online: true
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { authenticated } = this.props;
    // if (!authenticated) return <Redirect to="/" />;

    return (
      <div>
        <h2>Start a New Project</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Example: Drink More Water App (Open Source)"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Online project"
            checked={this.state.online}
            onClick={() =>
              this.setState(prevState => ({
                online: !prevState.online
              }))
            }
          />

          <Button variant="dark" type="submit" block>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { authenticated } = user;

  return { authenticated };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage);
