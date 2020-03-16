import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../actions/projectActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class NewProjectPage extends Component {
  state = {
    name: "",
    description: "",
    online: true,
    category: "Automotive",
    triggerRedirect: false,
    redirectId: null
  };

  handleSubmit = async () => {
    const { token, createProject } = this.props;
    console.log(this.state);
    const project = await createProject(token, this.state);
    this.setState({ triggerRedirect: true, redirectId: project.id });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  handleKeyPress(target) {
    if (target.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {
    if (!this.props.authenticated) return <Redirect to="/" />;
    if (this.state.triggerRedirect)
      return <Redirect to={`/projects/${this.state.redirectId}`} />;

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
              required
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={this.state.category}
              onChange={this.handleCategoryChange}
              required
            >
              <option disabled>Select a category</option>
              <option value="Automotive">Automotive</option>
              <option value="Charity">Charity</option>
              <option value="Educational">Educational</option>
              <option value="Makers and Crafting">Makers and Crafting</option>
              <option value="Health and Fitness">Health and Fitness</option>
              <option value="Food and Drink">Food and Drink</option>
              <option value="Programming">Programming</option>
              <option value="Social Media">Social Media</option>
              <option value="Others">Others</option>
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
              onKeyPress={e => this.handleKeyPress(e)}
              required
            />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Online project"
            defaultChecked={this.state.online}
            onKeyPress={e => this.handleKeyPress(e)}
            onClick={() =>
              this.setState(prevState => ({
                online: !prevState.online
              }))
            }
          />

          <Button
            variant="dark"
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.handleSubmit();
            }}
            block
          >
            Post Project
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ user, token }) => ({
  authenticated: user.authenticated,
  token: token.token
});

const mapDispatchToProps = dispatch => {
  return {
    createProject: (token, project) => dispatch(createProject(token, project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage);
