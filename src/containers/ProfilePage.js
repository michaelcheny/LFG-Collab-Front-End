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

class ProfilePage extends Component {
  state = {
    showEmailForm: false
  };

  render() {
    const { user, authenticated, token } = this.props;
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Stats">
                "teddies"
              </Tab>
              <Tab eventKey="profile" title="Profile">
                "poopoo"
              </Tab>
              <Tab eventKey="contact" title="Account">
                <AccountInfo user={user} />
                <hr />
                <Button
                  variant="dark"
                  onClick={() => this.setState({ showEmailForm: true })}
                >
                  Edit account
                </Button>

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

const mapStateToProps = ({ user, token }) => ({
  user: user.user,
  authenticated: user.authenticated,
  token: token.token
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
