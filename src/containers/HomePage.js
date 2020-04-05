import React, { Component } from "react";
import { connect } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import NewestProjects from "../components/NewestProjects";
import moment from "moment";
import { subscribeToTimer } from "../api";

class HomePage extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
  }

  state = {
    timestamp: "no timestamp yet",
  };

  renderGreeting = () => {
    const { currentUser, authenticated } = this.props;

    if (authenticated) {
      return <p>Hello, {currentUser.name}</p>;
    } else {
      return <p>Hello!</p>;
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome to LFG Collab</h2>

        {this.renderGreeting()}

        <Jumbotron fluid>
          <Container>
            <h1>Join online or local projects around the world!</h1>
            <p>
              Welcome to LFG Collab where you will find projects posted by users
              around the world. Join a project that you feel strong about and
              want to collaborate on. Projects can by about anything, from an
              online pair programming sessions, to group fitness workouts, to an
              online open-source app collaborations.
            </p>
            <p>
              This is the timer value:{" "}
              {moment(this.state.timestamp).format("h:mm:ss a")}
            </p>

            <NewestProjects />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.user,
  authenticated: user.authenticated,
});

export default connect(mapStateToProps)(HomePage);
