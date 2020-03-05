import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";

class HomePage extends Component {
  renderGreeting = () => {
    const { currentUser, authenticated } = this.props;

    if (authenticated) {
      return <p>Hello, {currentUser.name}</p>;
    } else {
      return <p>Hello!</p>;
    }
  };

  render() {
    return (
      <div>
        <h2>Home Page</h2>

        {this.renderGreeting()}

        <Carousel
          carouselItems={[
            <img
              src="https://www.petmd.com/sites/default/files/dog-stomach-noises-2.jpg"
              alt="pic"
            />,
            <img
              src="https://i.ytimg.com/vi/JVjtMl3APFs/hqdefault.jpg"
              alt="pic"
            />,
            <img
              src="http://news.bbcimg.co.uk/media/images/58682000/jpg/_58682918_wild_dog_screz.jpg"
              alt="pic"
            />
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    currentUser: user.user,
    authenticated: user.authenticated
  };
};

export default connect(mapStateToProps)(HomePage);
