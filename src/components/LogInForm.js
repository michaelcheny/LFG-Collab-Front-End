import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getToken, Login } from "../actions/usersActions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ErrorBox from "../components/ErrorBox";

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: false
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
    let response = await this.props.login(token, email, password);
    console.log(response);
    if (response.error && response.error === "error") {
      this.setState({
        email: "",
        password: "",
        error: true
      });
    }
  };

  handleKeyPress(target) {
    if (target.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {
    const { auth, show, onHide } = this.props;

    if (auth) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.error ? (
              <ErrorBox errors={["Invalid credentials, please try again."]} />
            ) : null}
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
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
                  required
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
