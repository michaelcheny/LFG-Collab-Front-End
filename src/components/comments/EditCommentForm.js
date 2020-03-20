import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { EditComment } from "../../actions/commentActions";

class EditCommentForm extends Component {
  state = {
    content: "tacotacotaco"
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    if (prevState.content === "tacotacotaco") {
      this.getCommentContent();
    }
  }

  getCommentContent = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/v1/comments/${this.props.id}`
      );
      const data = await res.json();
      console.log(data);
      this.setState({
        content: data.content
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { token, updateComment, id, onHide } = this.props;
    updateComment(id, token, this.state.content);
    this.setState({ content: "" });
    onHide();
  };

  render() {
    const { show, onHide } = this.props;
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Update you comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.content}
                onChange={event =>
                  this.setState({
                    content: event.target.value
                  })
                }
                placeholder={this.state.content}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="button"
            variant="dark"
            type="submit"
            onClick={this.handleSubmit}
          >
            Update comment
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ token }) => ({
  token: token.token
});

const mapDispatchToProps = dispatch => ({
  updateComment: (commentId, token, content) =>
    dispatch(EditComment(commentId, token, content))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);
