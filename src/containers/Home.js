import React from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>HELLLOOOO</p>
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
};

export default Home;
