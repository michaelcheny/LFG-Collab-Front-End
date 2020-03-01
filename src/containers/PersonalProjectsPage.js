import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonalProjects } from "../actions/fetchProjects";

class PersonalProjectsPage extends Component {
  componentDidMount() {
    this.props.fetchMyProjects();
  }

  render() {
    console.log(this.props.projects);
    return <div>sddsf</div>;
  }
}

const mapStateToProps = state => {
  const { projects } = state;
  return { projects: projects.personalProjects, loading: projects.loading };
};

const mapDispatchToProps = dispatch => ({
  fetchMyProjects: () => dispatch(fetchPersonalProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalProjectsPage);
