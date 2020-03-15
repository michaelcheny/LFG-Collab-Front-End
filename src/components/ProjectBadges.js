import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class ProjectBadges extends Component {
  render() {
    const { comments, reactions } = this.props;

    return (
      <>
        <Button className="button" variant="dark" size="sm">
          <span role="img" aria-label="chat-bubble">
            💬
          </span>
          <Badge variant="light">{comments.length}</Badge>
        </Button>{" "}
        <Button
          className="button"
          variant="dark"
          // disabled={!authenticated}
          size="sm"
          // onClick={handleJoinProject}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          <Badge variant="light">{reactions.length}</Badge>
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBadges);
