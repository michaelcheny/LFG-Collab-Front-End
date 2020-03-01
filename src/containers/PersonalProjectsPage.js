import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonalProjects } from "../actions/fetchProjects";

class PersonalProjectsPage extends Component {
  componentDidMount() {
    this.props.fetchMyProjects();
  }

  render() {
    console.log(this.props.projects); // MAP OVER THIS MOFO AND RENDER THAT SHIT YDIDADADA
    return <div>sddsf</div>;
  }
}

const mapStateToProps = ({ projects }) => {
  return { projects: projects.personalProjects, loading: projects.loading };
};

const mapDispatchToProps = dispatch => ({
  fetchMyProjects: () => dispatch(fetchPersonalProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalProjectsPage);
