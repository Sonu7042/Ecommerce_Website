import React, {  useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import role from "../common/role";
import { setUserDetails } from "../redux/userSlice";
import Context from "../context";


const Header = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const {cartProductCount}= useContext(Context)
  const [menuDisplay, setMenuDisplay] = useState(false);

  const user = useSelector((state) => state?.user);

  const searchInput= useLocation()
  const urlSearch= new URLSearchParams(searchInput.search)
  const searchQuery= urlSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery);
  // console.log(search)

  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    dispatch(setUserDetails(null))
    
  };



  const handleSearch=(e)=>{
   const {value}= e.target
   setSearch(value)
   if(value){
    navigate(`/search?q=${value}`)
   }
   else{
    navigate("/search")
   }
  }


  
  return (
    <header className="h-16 shadow-md bg-white  fixed w-full z-40">
      <div className="h-full flex items-center  container mx-auto px-4 justify-between">
        <div className="flex items-center text-2xl">
          <Link to="/">SevenStar</Link>
        </div>

        <div className=" flex lg:flex item-center mx-w-sm border justify-center  rounded-full focus-within:shadow-md pl-2 ">
          <input
            type="text"
            placeholder="search Product here"
            className="outline-none"
            onChange={handleSearch}
          />
          <div className="flex items-center justify-center text-lg min-w-[50px] h-8 rounded-r-full ">
            <IoSearchSharp />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">


            {user?._id && (
              <div
                className="text-2xl cursor-pointer "
                onClick={() => setMenuDisplay((prev) => !prev)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-9 h-9 rounded-full"
                    alt={user.name}
                  />
                ) : (
                  <FaUserCircle />
                )}
              </div>
            )}

            {menuDisplay && (
             
              <div className="absolute bg-white bottom-0 top-11 h-fit rounded-full">
                <nav>{user?.role === role.ADMIN && (
                  <Link to={"/adminpanel"} className="whitespace-nowrap  md:block  w-full h-full rounded-full hover:bg-slate-100 p-2" onClick={()=>setMenuDisplay((pre)=>!pre)}> Admin Panel</Link>
                )}</nav>
              </div>
            )}
          </div>  


          {user?._id && (
            <Link to={"/cart"} className="relative">
              <span>
                <FaShoppingCart className="text-2xl" />
              </span>

              <div className="bg-red-500 text-white p-2 w-5 h-5 rounded-full flex items-center justify-center absolute -top-2  -right-3">
                <p>{cartProductCount}</p>
              </div>
            </Link>
          )}

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="bg-red-600  text-white px-3 py-1 rounded-full  hover:bg-red-700 "
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="bg-red-600  text-white px-3 py-1 rounded-full  flex items-center justify-center hover:bg-red-700 "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
