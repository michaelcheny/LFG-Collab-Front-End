import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getToken, Login } from "../actions/usersActions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async () => {
    const { email, password } = this.state;
    let token = await this.props.getToken();
    this.props.login(token, email, password);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleKeyPress(target) {
    if (target.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  onKeyPress={e => this.handleKeyPress(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="nav-routes"
              variant="dark"
              size="sm"
              // block
              onClick={this.handleSubmit}
            >
              Log In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;

  return {
    user: user.user,
    auth: user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (token, email, password) => dispatch(Login(token, email, password)),
    getToken: () => dispatch(getToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
