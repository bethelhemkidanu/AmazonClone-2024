import React from 'react'
import { catagoryImage } from "./CatagoryfullInfo";
import CatagoryCard from './CatagoryCard'
import classes from "./catagory.module.css";
const Catagory = () => {
  return (
    <section className={classes.catagory_container}>
      {catagoryImage.map((infos,i)  => {
        return <CatagoryCard data={infos} key={i} />;
      })}
    </section>
  );
}

export default Catagory