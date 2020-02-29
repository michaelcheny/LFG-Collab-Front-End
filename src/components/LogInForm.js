import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
// import { getToken } from "../actions/getToken";
import { Redirect } from "react-router-dom";
import { Login } from "../actions/Login";

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
    const { token } = this.props;
    const { email, password } = this.state;
    event.preventDefault();

    this.props.login(token, email, password);

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/home" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="nav-routes"
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          className="nav-routes"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <Button
          className="nav-routes"
          variant="secondary"
          size="sm"
          onClick={this.handleSubmit}
        >
          Log In
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { token, user } = state;

  return {
    token: token.token,
    user: user.user,
    auth: user.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (token, email, password) => dispatch(Login(token, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
