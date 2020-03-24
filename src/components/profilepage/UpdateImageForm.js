import React, { Component } from "react";
import { connect } from "react-redux";
import { UpdateImage } from "../../actions/usersActions";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ErrorBox from "../ErrorBox";

export class UpdateImageForm extends Component {
  state = {
    image: "",
    password: ""
  };

  handleSubmit = async event => {
    const { token, userId, updateImage, onHide } = this.props;
    event.preventDefault();
    console.log(this.state);
    const data = await updateImage(token, this.state, userId);
    if (Object.keys(data).includes("errors")) {
      this.setState({
        password: "",
        errors: true,
        errorMessages: ["Incorrect password"]
      });
    } else {
      onHide();
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.errors ? (
            <ErrorBox errors={this.state.errorMessages} />
          ) : null}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Paste Image Url"
                value={this.state.image}
                onChange={this.handleChange}
                size="sm"
                required
              />
              <Form.Text className="text-muted">
                PNG files work the best.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="smaller-text">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
                size="sm"
                required
              />
              <Form.Text className="text-muted">
                Confirm your password.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            type="submit"
            block
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ token, user }) => ({
  token: token.token,
  userId: user.user.id
});

const mapDispatchToProps = dispatch => ({
  updateImage: (token, image, id) => dispatch(UpdateImage(token, image, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImageForm);
