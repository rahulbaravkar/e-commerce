import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCaroselData } from "./MainCaroselData";

const MainCarousel = () => {
  const items = mainCaroselData.map((item) => (
    <img
      key={item.path}
      src={item.image}
      alt="carousel"
      className="cursor-pointer"
      role="presentation"
    />
  ));

  return (


    <div className="w-full">
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
