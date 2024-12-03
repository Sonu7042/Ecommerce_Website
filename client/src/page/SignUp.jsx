import React, { useState } from "react";
import signup from "../assets/signin.gif";
import imageTobase64 from "../helper/imageTobase64";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../common/index";
import { toast } from "react-toastify";
import imageUpload from "../helper/imageUpload";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic:""
  });


  const [file, setFile] = useState("");

  const [showPasswod, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handlePicUpload = async (e) => {
    const file = e.target.files[0];
     const uploadImage= await imageUpload(file);
    
    const imagePic = await imageTobase64(file);
    setFile(imagePic);
    setData((pre)=>{
      return {...pre, profilePic:uploadImage.url}
    })
  
  };




  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (data.password === data.confirmPassword) {
      const response = await axios.post(SummaryApi.signup.url, data);

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      }

      if (response.error) {
        toast.error(response.message);
      }
    } else {
      toast.error("Please check password and confirmPassword");
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="bg-white w-full p-4 max-w-sm mx-auto rounded-md">
        <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
          <div className="">
            <img src={file || signup} alt="signup" />
          </div>

          <form>
            <label htmlFor="name">
              <div className="text-xs bg-slate-200 bg-opacity-80 pb-4 pt-2 text-center absolute bottom-0 w-full ">
                Upload Photo
              </div>
            </label>
            <input
              id="name"
              className="hidden"
              type="file"
              onChange={handlePicUpload}
            />
          </form>
        </div>

        <form className="pt-6 flex flex-col gap-2 " onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <div className="bg-slate-100 p-1">
              <input
                type="text"
                name="name"
                placeholder="enter name"
                onChange={onchange}
                required
                className="w-full h-full bg-transparent outline-none"
              />
            </div>
          </div>

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

          <div>
            <label>Confirm Password:</label>

            <div className="bg-slate-100 flex p-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="enter password"
                name="confirmPassword"
                onChange={onchange}
                required
                className="w-full h-full bg-transparent outline-none"
              />

              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowConfirmPassword((pre) => !pre)}
              >
                <span>
                  {" "}
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                </span>
              </div>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 max-w-[150px] rounded-full hover:scale-110 translation-all mx-auto mt-4">
            Sign Up
          </button>
        </form>

        <p className="py-5 ">
          Already have Account?{" "}
          <Link to={"/login"} className="text-red-600 hover:text-red-700 ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
