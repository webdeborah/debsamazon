"use client";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "../public/items.json";
import React from "react";

function Banner() {
  const { bootstrap } = items;
  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} interval={4000}>
            <img src={item.imageUrl} alt="slides" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;