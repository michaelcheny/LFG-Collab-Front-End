import React, { Component } from "react";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { EmailForm } from "../components/ProfileForms";

class MyProfile extends Component {
  state = {
    showEmailForm: false
  };
  render() {
    const { user, authenticated, token } = this.props;
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          {/* <Sonnet /> */}
          "teddies"
        </Tab>
        <Tab eventKey="profile" title="Profile">
          {/* <Sonnet /> */}
          "poopoo"
        </Tab>
        <Tab eventKey="contact" title="Account">
          Account settings <br />
          Email address <br />
          {user.email}
          <span onClick={() => this.setState({ showEmailForm: true })}>
            BUTTON
          </span>{" "}
          <EmailForm
            show={this.state.showEmailForm}
            onHide={() => this.setState({ showEmailForm: false })}
          />{" "}
          ---- changes button here "look at reddit account settings" <br />
          Change password <br />
          password must be 6-20 length -- in smaller font -- button pops up
          password form
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = ({ user, token }) => ({
  user: user.user,
  authenticated: user.authenticated,
  token: token.token
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
