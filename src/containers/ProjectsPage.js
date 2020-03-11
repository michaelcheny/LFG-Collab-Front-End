import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "../components/project/Project";
import { fetchProjects } from "../actions/projectActions";
import Spinner from "react-bootstrap/Spinner";
import { CategorySelector } from "../components/project/CategorySelector";

class ProjectPage extends Component {
  state = {
    categoryId: null
  };

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects = () => {
    const { allProjects, loading } = this.props;
    let projects;
    let selected;

    if (this.state.categoryId) {
      selected = allProjects.filter(
        project => project.category_id.toString() === this.state.categoryId
      );
    }

    this.state.categoryId === null || this.state.categoryId === "all"
      ? (projects = allProjects)
      : (projects = selected);

    if (!loading) {
      return projects.map(project => {
        return (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            users={project.users}
            addedOn={project.created_at}
            category={project.category.name}
          />
        );
      });
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Available Projects</h1>
        <CategorySelector
          changeCategory={id => this.setState({ categoryId: id })}
        />
        {console.log(this.state.categoryId)}
        <br />
        {this.renderProjects()}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return { allProjects: projects.projects, loading: projects.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
