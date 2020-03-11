import React, { Component } from "react";
import { connect } from "react-redux";

class ProjectDetail extends Component {
  componentDidMount() {
    this.fetchProject();
  }

  fetchProject = async () => {
    const { id } = this.props.match.params;
    console.log(id);
    const res = await fetch(`http://localhost:3001/api/v1/projects/${id}`);
    const data = await res.json();
    console.log(data);
    // shove this data into the state and make a show detail page YEEEEEET
  };

  render() {
    // console.log(this.props.match.params.id);
    // let { slug } = useParams();
    // console.log(slug);
    return (
      <div>
        sdfsdf
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
