// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchPersonalProjects } from "../actions/projectActions";
// import Project from "../components/project/Project";
// import { CategorySelector } from "../components/project/CategorySelector";

// class PersonalProjectsPage extends Component {
//   state = {
//     categoryId: null
//   };

//   componentDidMount() {
//     this.props.fetchMyProjects();
//   }

//   renderProjects = () => {
//     const { allProjects, loading } = this.props;
//     let projects;
//     let selected;

//     if (this.state.categoryId) {
//       selected = allProjects.filter(
//         project => project.category_id.toString() === this.state.categoryId
//       );
//     }

//     this.state.categoryId === null || this.state.categoryId === "all"
//       ? (projects = allProjects)
//       : (projects = selected);

//     if (!loading) {
//       return projects.map(project => {
//         return (
//           <Project
//             key={project.id}
//             id={project.id}
//             name={project.name}
//             description={project.description}
//             users={project.users}
//             addedOn={project.created_at}
//             category={project.category.name}
//           />
//         );
//       });
//       // } else {
//       //   return (
//       //     <Spinner animation="border" role="status">
//       //       <span className="sr-only">Loading...</span>
//       //     </Spinner>
//       //   );
//     }
//   };

//   render() {
//     console.log(this.props.projects);
//     const { projects } = this.props;
//     return (
//       <div>
//         <h1>My Projects</h1>

//         <CategorySelector
//           changeCategory={id => this.setState({ categoryId: id })}
//         />
//         <br />
//         {this.renderProjects()}

//         {/* {projects.map(project => {
//           // console.log(project);
//           return (
//             <Project
//               key={project.id}
//               id={project.id}
//               name={project.name}
//               description={project.description}
//               users={project.users}
//               addedOn={project.created_at}
//               category={project.category.name}
//             />
//           );
//         })} */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ projects }) => {
//   return { allProjects: projects.personalProjects, loading: projects.loading };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchMyProjects: () => dispatch(fetchPersonalProjects())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PersonalProjectsPage);
