import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from "./img/data";
import classes from "./carousel.module.css";
export default function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem) => {
          return <img src={imageItem} key={imageItem} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}
