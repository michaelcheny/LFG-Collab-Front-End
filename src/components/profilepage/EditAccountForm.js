import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { UpdateUser } from "../../actions/usersActions";
import ErrorBox from "../ErrorBox";

class EditAccountForm extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
    city: "",
    state: "",
    country: "",
    errors: false,
    errorMessages: []
  };

  componentDidMount() {
    const { user } = this.props;
    console.log(user);
    this.setState({
      email: user.email,
      name: user.name,
      city: user.city,
      state: user.state,
      country: user.country,
      errors: false,
      errorMessages: []
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const { token, user, updateUser, onHide } = this.props;
    const updatedUser = await updateUser(token, this.state, user.id);
    console.log(updatedUser);
    if (Object.keys(updatedUser).includes("errors")) {
      this.setState({
        password: "",
        password_confirmation: "",
        errors: true,
        errorMessages: updatedUser.errors
      });
    } else {
      onHide();
    }
  };

  render() {
    const {
      errorMessages,
      errors,
      email,
      name,
      password,
      password_confirmation,
      city,
      state,
      country
    } = this.state;
    const { show, onHide } = this.props;

    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors ? <ErrorBox errors={errorMessages} /> : null}

          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="smaller-text">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label className="smaller-text">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={this.handleChange}
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="smaller-text">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
                size="sm"
                required
              />
              <Form.Text className="text-muted">
                Choose a password between 6 to 20 characters.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label className="smaller-text">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="password_confirmation"
                placeholder="Confirm your password"
                value={password_confirmation}
                onChange={this.handleChange}
                size="sm"
                required
              />
              <Form.Text className="text-muted">
                Confirm your password.
              </Form.Text>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="smaller-text">City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={city}
                  onChange={this.handleChange}
                  size="sm"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="smaller-text">State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={state}
                  onChange={this.handleChange}
                  size="sm"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="smaller-text">Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  value={country}
                  onChange={this.handleChange}
                  size="sm"
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            type="submit"
            size="sm"
            block
            onClick={this.handleSubmit}
          >
            Update Account
          </Button>
          {/* <Button onClick={onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ user, token }) => ({
  user: user.user,
  token: token.token
});

const mapDispatchToProps = dispatch => ({
  updateUser: (token, userInfo, id) => dispatch(UpdateUser(token, userInfo, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountForm);
