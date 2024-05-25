import React, { useState, useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endpoints'
// import Product from '../../components/Product/Product'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'
const Results = () => {
  const [results, setResults] = useState([])
  const [isLoading, setisLoading] = useState(false);
  const {catagoryName} = useParams()
  useEffect(() => {
    setisLoading(true)
   axios.get(`${productUrl}/products/category/${catagoryName}`)
  .then((res)=>{
    setResults(res.data)
    setisLoading(false);
  }).catch((err)=>{
    console.log(err)
    setisLoading(false);
  }) 
  }, []);
  
  // console.log(catagoryName) 
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catagory / {catagoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => {
             return (
             <ProductCard 
             key={product.id} 
             product={product}
             renderDesc={false}
             renderAdd={true} 
             />)
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results