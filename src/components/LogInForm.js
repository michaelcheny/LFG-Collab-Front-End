import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
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

  handleSubmit = async () => {
    const { email, password } = this.state;
    // event.preventDefault();

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
          onKeyPress={e => this.handleKeyPress(e)}
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
