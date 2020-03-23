import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { updateProject } from "../../actions/projectActions";
import ErrorBox from "../../components/ErrorBox";

class EditProjectForm extends Component {
  state = {
    id: "",
    name: "",
    description: "",
    online: "",
    team_size: "",
    errors: false,
    errorMessages: []
  };

  componentDidMount() {
    this.fillFormWithProject();
  }

  fillFormWithProject = async () => {
    const { projectId } = this.props;
    const res = await fetch(
      `http://localhost:3001/api/v1/projects/${projectId}`
    );
    const data = await res.json();
    this.setState({
      id: data.id,
      name: data.name,
      description: data.description,
      online: data.online,
      team_size: data.team_size
    });
  };

  handleSizeChange = event => {
    this.setState({ team_size: event.target.value });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    const { token, updateProject, onHide } = this.props;

    event.preventDefault();
    const project = await updateProject(token, this.state);
    if (project.errors && project.errors.length > 0) {
      this.setState({ errors: true, errorMessages: project.errors });
    } else {
      onHide();
    }
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.errors ? (
            <ErrorBox errors={this.state.errorMessages} />
          ) : null}

          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
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
                <option value="7">7</option>
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
                // onKeyPress={e => this.handleKeyPress(e)}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            type="submit"
            block
            onClick={this.handleSubmit}
          >
            Update Project
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ token }) => ({
  token: token.token
});

const mapDispatchToProps = dispatch => ({
  updateProject: (token, project) => dispatch(updateProject(token, project))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
