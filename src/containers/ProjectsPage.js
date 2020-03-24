import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectCard from "../components/project/ProjectCard";
import { fetchProjects } from "../actions/projectActions";
import { CategorySelector } from "../components/CategorySelector";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProjectPage extends Component {
  state = {
    categoryId: null
  };

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects = () => {
    const { allProjects, loading, authenticated } = this.props;

    let projects;

    this.state.categoryId === null || this.state.categoryId === "all"
      ? (projects = allProjects)
      : (projects = allProjects.filter(
          project => project.category_id == this.state.categoryId
        ));

    if (!loading) {
      return projects.map(project => {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            authenticated={authenticated}
          />
        );
      });
    } else {
      return <LoadingSpinner />;
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>

          <Col xs={9}>
            <h1>Available Projects</h1>
            <CategorySelector
              changeCategory={id => this.setState({ categoryId: id })}
            />
            <br />
            <br />
            {this.renderProjects()}
          </Col>

          <Col></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ projects, user }) => ({
  allProjects: projects.projects,
  loading: projects.loading,
  authenticated: user.authenticated
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
