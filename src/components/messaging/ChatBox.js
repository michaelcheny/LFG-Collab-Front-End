import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import io from "socket.io-client";
import { connect } from "react-redux";
import moment from "moment";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    // if (!socket) {
    //   socket = io(":3002");
    // }
    this.state = {
      message: "",
      messages: [],
    };
    this.socket = io(":3002");

    this.socket.on("RECEIVE_MESSAGE", (data) => {
      addMessage(data);
    });

    const addMessage = (data) => {
      // console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      // console.log(this.state.messages);
    };
  }

  componentDidMount() {
    this.socket.emit("join", { user: this.props.user.name, room: this.props.room });
  }

  sendMessage = (message) => {
    // console.log("hello");
    this.socket.emit("SEND_MESSAGE", {
      author: this.props.user.name,
      message: message,
      room: this.props.room,
      date: Date.now(),
    });
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="chat-box">
        <Card style={{ width: "32rem", height: "40rem", margin: "auto", overflow: "auto" }}>
          <Card.Body>
            <Card.Title>CHAT GOES BRRRRRRR</Card.Title>
            <Card.Text>
              {this.state.messages.map((message) => {
                return (
                  <div>
                    {message.author}
                    <span style={{ fontSize: "12px" }}>({moment(message.date).format("LT")})</span>:{" "}
                    {message.message}
                  </div>
                );
              })}
            </Card.Text>
            <InputGroup
              className="mb-3"
              // will eventually move style to css.. maybe
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                padding: "0px 10px 0px",
                marginTop: "2rem",
              }}
            >
              <FormControl
                placeholder="Enter group message..."
                type="text"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                onKeyPress={(e) => (e.key === "Enter" ? this.sendMessage(this.state.message) : null)}
              />
              <InputGroup.Append>
                <Button variant="dark" onClick={() => this.sendMessage(this.state.message)}>
                  Send
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.user,
});
export default connect(mapStateToProps)(ChatBox);
