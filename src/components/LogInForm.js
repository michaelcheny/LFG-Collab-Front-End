import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
// import { getToken } from "../actions/tokenActions";
import { Redirect } from "react-router-dom";
import { getToken, Login } from "../actions/usersActions";

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

  handleSubmit = async event => {
    // const { token } = this.props;
    const { email, password } = this.state;
    event.preventDefault();

    let token = await this.props.getToken();
    this.props.login(token, email, password);

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
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
  const { user } = state;

  return {
    // token: token.token,
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
