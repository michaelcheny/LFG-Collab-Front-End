import React, { Component } from "react";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import EditAccountForm from "../components/profilepage/EditAccountForm";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AccountInfo from "../components/profilepage/AccountInfo";
import { Redirect } from "react-router-dom";
import { fetchPersonalProjects } from "../actions/projectActions";
import MyProjects from "../components/profilepage/MyProjects";
import UpdateImageForm from "../components/profilepage/UpdateImageForm";

class ProfilePage extends Component {
  state = {
    showEmailForm: false,
    showImageForm: false
  };

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { user, authenticated, token, projects } = this.props;

    // if (!authenticated) {
    //   return <Redirect to="/" />;
    // }

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="home" title="Stats">
                "teddies"
              </Tab>

              <Tab eventKey="profile" title="Projects">
                <h5 className="account-page-tile">My Projects</h5>

                {projects.map(project => {
                  return <MyProjects project={project} />;
                })}
              </Tab>

              <Tab eventKey="contact" title="Account">
                <AccountInfo user={user} />
                <hr />
                <Button
                  variant="dark"
                  onClick={() => this.setState({ showEmailForm: true })}
                >
                  Edit account
                </Button>{" "}
                <Button
                  variant="dark"
                  onClick={() => this.setState({ showImageForm: true })}
                >
                  Update image
                </Button>
                <UpdateImageForm
                  show={this.state.showImageForm}
                  onHide={() => this.setState({ showImageForm: false })}
                />
                <EditAccountForm
                  show={this.state.showEmailForm}
                  onHide={() => this.setState({ showEmailForm: false })}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ user, token, projects }) => ({
  user: user.user,
  authenticated: user.authenticated,
  token: token.token,
  projects: projects.personalProjects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchPersonalProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
