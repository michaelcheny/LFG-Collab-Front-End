import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../actions/projectActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ErrorBox from "../components/ErrorBox";

class NewProjectPage extends Component {
  state = {
    name: "",
    description: "",
    online: true,
    category: "Automotive",
    team_size: 2,
    triggerRedirect: false,
    redirectId: null,
    errors: false,
    errorMessages: []
  };

  handleSubmit = async event => {
    const { token, createProject } = this.props;
    event.preventDefault();
    // console.log(this.state);
    const project = await createProject(token, this.state);
    if (project.errors && project.errors.length > 0) {
      this.setState({ errors: true, errorMessages: project.errors });
    } else {
      this.setState({ triggerRedirect: true, redirectId: project.id });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  handleSizeChange = event => {
    this.setState({ team_size: event.target.value });
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

        {this.state.errors ? (
          <ErrorBox errors={this.state.errorMessages} />
        ) : null}

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
              size="sm"
              required
            >
              <option disabled>Select a category</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Automotive">Automotive</option>
              <option value="Charity">Charity</option>
              <option value="Educational">Educational</option>
              <option value="Farming and Gardening">
                Farming and Gardening
              </option>
              <option value="Fashion">Fashion</option>
              <option value="Food and Drink">Food and Drink</option>
              <option value="Gaming">Gaming</option>
              <option value="Health and Fitness">Health and Fitness</option>
              <option value="Home Improvement">Home Improvement</option>
              <option value="Makers and Crafting">Makers and Crafting</option>
              <option value="Politics">Politics</option>
              <option value="Programming">Programming</option>
              <option value="Social Media">Social Media</option>
              <option value="Others">Others</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Desired Team Size</Form.Label>
            <Form.Control
              as="select"
              value={this.state.team_size}
              onChange={this.handleSizeChange}
              size="sm"
              required
            >
              <option disabled>Select a category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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

          <Button variant="dark" type="submit" block>
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
