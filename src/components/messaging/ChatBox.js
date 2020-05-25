import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import io from "socket.io-client";

let socket = io(":3002");

class ChatBox extends Component {
  constructor() {
    super();
    if (!socket) {
      socket = io(":3002");
    }
  }
  state = {
    messages: [],
  };

  sendMessage = (message) => {
    console.log("hello");
    socket.emit("chat message", message);
  };

  getMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] });
  };

  render() {
    return (
      <div className="chat-box">
        <Card style={{ width: "30rem", height: "40rem" }}>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.isynergi.com.au%2Fwp-content%2Fuploads%2F2016%2F11%2Fbubble_consulting_chat-512.png&f=1&nofb=1"
            style={{ height: "50px", width: "50px" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="primary" onClick={() => this.sendMessage(this.state.messages)}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default ChatBox;
