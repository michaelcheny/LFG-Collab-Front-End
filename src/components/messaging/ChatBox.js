import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import io from "socket.io-client";
import { connect } from "react-redux";

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

    this.socket.on("RECEIVE_MESSAGE", function (data) {
      addMessage(data);
    });

    const addMessage = (data) => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };
  }

  sendMessage = (message) => {
    // console.log("hello");
    this.socket.emit("SEND_MESSAGE", {
      author: this.props.user.name,
      message: message,
    });
    this.setState({ message: "" });
  };

  // renderMessages = () => {
  //   this.socket.on("chat message", (msg) => {
  //     this.setState({ messages: this.state.messages.concat(msg) });
  //   });
  //   // if (this.state.messages) this.state.messages.map((msg) => <p>{msg}</p>);
  //   console.log(this.state.message);
  // };

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
            <Card.Text>
              {this.state.messages.map((message) => {
                return (
                  <div>
                    {message.author}: {message.message}
                  </div>
                );
              })}
            </Card.Text>
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

const mapStateToProps = ({ user }) => ({
  user: user.user,
});
export default connect(mapStateToProps)(ChatBox);
