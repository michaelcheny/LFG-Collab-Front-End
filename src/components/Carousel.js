import React, { useState, useEffect, cloneElement } from "react";

const Carousel = ({ carouselItems, ...rest }) => {
  const [active, setActive] = useState(0);

  const style = {
    carousel: {
      position: "relative"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setActive((active + 1) % carouselItems.length);
    }, 4000);

    return () => {
      clearTimeout(time);
    };
  });

  return (
    <div style={style.carousel}>
      {carouselItems.map((item, index) => {
        const activeStyle = active === index ? style.visible : {};
        return cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          }
        });
      })}
    </div>
  );
};

export default Carousel;
