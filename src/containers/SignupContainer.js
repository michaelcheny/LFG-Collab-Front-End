import React, { Component } from "react";
import { connect } from "react-redux";

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
      redirectToHomepage: false
    };
  }

  handleChange = event => {
    [event.target.name] = event.target.value;
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
