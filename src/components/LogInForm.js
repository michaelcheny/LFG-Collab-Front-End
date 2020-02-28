import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

class LogInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
    console.log(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="mr-sm-2"
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          className="mr-sm-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <Button variant="secondary" size="sm">
          Log In
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
