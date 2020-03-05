import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewProjectPage extends Component {
  render() {
    const { authenticated } = this.props;
    if (!authenticated) return <Redirect to="/" />;

    return (
      <div>
        fsgsdfg sdfsd
        <p>sdfs</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { authenticated } = user;

  return { authenticated };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage);
