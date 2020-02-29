import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { getToken } from "../actions/getToken";
import { Login } from "../actions/Login";

class LogInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    this.props.getToken();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    const { token } = this.props;
    const { email, password } = this.state;
    event.preventDefault();
    // console.log(this.props.token);
    // await Login(token, email, password);

    await this.props.login(token, email, password);
    // send the inputs to the login thing
    // console.log(this.state);
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
        <Button variant="secondary" size="sm" onClick={this.handleSubmit}>
          Log In
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { token, user } = state;
  // console.log(token);
  // console.log(user);
  // console.log(state);
  return {
    token: token.token,
    user: user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(getToken()),
    login: (token, email, password) => dispatch(Login(token, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
