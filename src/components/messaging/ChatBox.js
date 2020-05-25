import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
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
    message: "",
  };

  sendMessage = (message) => {
    // console.log("hello");
    socket.emit("chat message", message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="chat-box">
        <Card style={{ width: "32rem", height: "40rem", margin: "auto" }}>
          {/* <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.isynergi.com.au%2Fwp-content%2Fuploads%2F2016%2F11%2Fbubble_consulting_chat-512.png&f=1&nofb=1"
            style={{ height: "50px", width: "50px" }}
          /> */}
          <Card.Body>
            <Card.Title>CHAT GOES BRRRRRRR</Card.Title>
            <Card.Text>PLACEHOLDER FOR THE CHAT</Card.Text>
            <InputGroup
              className="mb-3"
              // will eventually move style to css.. maybe
              style={{ position: "absolute", bottom: "0", left: "0", padding: "0px 10px 0px" }}
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
export default ChatBox;
