import React from 'react'
import {BrowserRouter as Router, Routes,Route, redirect} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Auth from './pages/Auth/Auth'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/ProtectedRoute'

const stripePromise = loadStripe(
  "pk_test_51PJ9JOAadnB8cD1IOzdWH5IdgRNddOL4e2iYg41zXkPu7tzO85j5ckjM1APH0A9xhxNNmcY3wWIU6Hg732dyFA6y00rUyR3miv"
);

const Routing = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/payments' element={
          <ProtectedRoute msg={"you must login to pay"}
            redirect={"/payments"}
          >

            <Elements stripe={stripePromise}>
          <Payment/>
        </Elements>
          </ProtectedRoute>
        
        }/>
        <Route path='/orders' element={
        
        <ProtectedRoute msg={"you must login to see your orders"}
            redirect={"/orders"}
          >
        <Orders/>
        </ProtectedRoute>
        }/>
        <Route path='/catagory/:catagoryName' element={<Results/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
    </Router>
  )
}

export default Routing