import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SummaryApi from "./common/index";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./redux/userSlice";
import Context from "./context";


const App = () => {
  const dispatch = useDispatch();

  const [cartProductCount, setCartProductCount]=useState(0)

  const fetchCurrrentDetails = async () => {
    const response = await axios.get(SummaryApi.current_user.url, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    
      dispatch(setUserDetails(response.data.data));
    
  };




  const fetchProductAddToCart=async()=>{
    const response= await axios.get(SummaryApi.addToCartProductCount.url,{
      headers:{
        token: localStorage.getItem("token")
      }
    })
    // console.log(response)

    setCartProductCount(response.data.data.count)
    
  }

  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchCurrrentDetails();
    }

    fetchProductAddToCart()
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchCurrrentDetails, //current user details function
          fetchProductAddToCart, //function of no of count item add in cart
          cartProductCount   // count value of item add in  cart



        }}
      >
        <ToastContainer autoClose="1000" />
        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16 scrollbar-none">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
