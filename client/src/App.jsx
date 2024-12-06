import React, { useEffect } from "react";
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

  const fetchCurrrentDetails = async () => {
    const response = await axios.get(SummaryApi.current_user.url, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    
      dispatch(setUserDetails(response.data.data));
    
  };

  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchCurrrentDetails();
    }
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchCurrrentDetails, //current user details function
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
