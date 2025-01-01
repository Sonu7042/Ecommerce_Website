import React, { useContext, useState } from "react";
import loginIcon from "../assets/signin.gif";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../common";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Context from "../context/index";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const [showPasswod, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {fetchCurrrentDetails}=useContext(Context)

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
      const response = await axios.post(SummaryApi.login.url, data);
      console.log(response);

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/");
        fetchCurrrentDetails()
      }
    // } catch (err) {
      // if (toast.error) {
      //   // toast.error("User  not found");
      // }
    // }
  };



  return (
    <div className="container mx-auto p-4  ">
      <div className="bg-white w-full p-4 max-w-sm mx-auto rounded-md">
        <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
          <div className="">
            <img src={loginIcon} alt="signup" />
          </div>
        </div>

        <form className="pt-6 flex flex-col gap-2 " onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>

            <div className="bg-slate-100 p-1">
              <input
                type="email"
                name="email"
                placeholder="enter email"
                onChange={onchange}
                required
                className="w-full h-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label>Password:</label>

            <div className="bg-slate-100 flex p-1">
              <input
                type={showPasswod ? "text" : "password"}
                name="password"
                placeholder="enter password"
                onChange={onchange}
                required
                className="w-full h-full bg-transparent outline-none"
              />

              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowPassword((pre) => !pre)}
              >
                <span> {showPasswod ? <FaEyeSlash /> : <FaEye />} </span>
              </div>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 max-w-[150px] rounded-full hover:scale-110 translation-all mx-auto mt-4">
            Login
          </button>
        </form>

        <p className="py-5 ">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-red-600 hover:text-red-700 ">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
