import React from 'react'
import CarouselEffect from "../../components/carousel/Carousel";
import Catagory from "../../components/catagory/Catagory";
import Product from "../../components/Product/Product";
import LayOut from '../../components/LayOut/LayOut';

function Landing (){
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing;