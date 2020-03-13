import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import { getToken, Login } from "../actions/usersActions";
import Modal from "react-bootstrap/Modal";

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      modalShow: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async () => {
    const { email, password } = this.state;
    // event.preventDefault();

    let token = await this.props.getToken();
    this.props.login(token, email, password);

    this.setState({
      email: "",
      password: ""
    });
  };

  handleKeyPress(target) {
    if (target.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {
    const { auth } = this.props;
    const { onHide, show } = this.props;

    if (auth) {
      return <Redirect to="/" />;
    }

    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     <input
    //       type="text"
    //       name="email"
    //       placeholder="Email"
    //       onChange={this.handleChange}
    //       value={this.state.email}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       onChange={this.handleChange}
    //       value={this.state.password}
    //       onKeyPress={e => this.handleKeyPress(e)}
    //     />
    //     <Button
    //       className="nav-routes"
    //       variant="secondary"
    //       size="sm"
    //       onClick={this.handleSubmit}
    //     >
    //       Log In
    //     </Button>
    //   </form>
    // );

    return (
      <>
        <Modal
          // onHide={onHide}
          // show={show}
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* {console.log(this.props)} */}
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        {/* <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;

  return {
    user: user.user,
    auth: user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (token, email, password) => dispatch(Login(token, email, password)),
    getToken: () => dispatch(getToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
