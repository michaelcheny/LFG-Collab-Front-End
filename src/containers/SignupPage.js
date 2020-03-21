import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getToken, Signup } from "../actions/usersActions";
import ErrorBox from "../components/ErrorBox";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      city: "",
      state: "",
      country: "",
      errors: false,
      errorMessages: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let token = await this.props.getToken();
    let response = await this.props.register(token, this.state);
    // console.log(response);
    if (response.errors && response.errors.length > 0) {
      // response.errors.map(error => {
      //   this.setState({
      //     errorMessages: error.message
      //   });
      // });
      this.setState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        city: "",
        state: "",
        country: "",
        errors: true,
        errorMessages: response.errors
      });
    }
  };

  render() {
    const { authenticated } = this.props;

    if (authenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Registration</h1>

        {this.state.errors ? (
          <ErrorBox errors={this.state.errorMessages} />
        ) : null}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              Please enter first and last name.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              Choose a password between 6 to 20 characters.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password_confirmation"
              placeholder="Confirm your password"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">Confirm your password.</Form.Text>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                placeholder="Enter state"
                value={this.state.state}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                placeholder="Enter country"
                value={this.state.country}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
          </Form.Row>

          <Button variant="secondary" type="submit" size="md" block>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    authenticated: user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (token, user) => dispatch(Signup(token, user)),
    getToken: () => dispatch(getToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
