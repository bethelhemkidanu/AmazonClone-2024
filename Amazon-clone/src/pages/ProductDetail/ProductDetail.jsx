import React, { useEffect, useState } from 'react'
import classes from "./Productdetail.module.css"
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endpoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';
const ProductDetail = () => {
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [product, setproduct] = useState({})
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [productId]);
  return (
    <LayOut>
      
      {isLoading? (<Loader/>): (<ProductCard
       product={product}
       flex = {true}
       renderDesc={true}
       renderAdd={true}
       />)}
      
    </LayOut>
  );
}

export default ProductDetail