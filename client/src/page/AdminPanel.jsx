import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex">
      <aside
        className="bg-white min-h-full w-full max-w-60"
        style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}
      >
        <div className="h-auto flex justify-center items-center flex-col pt-10">
          <div className="text-5xl cursor-pointer  flex justify-center relative">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                alt={user?.name}
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <FaUserCircle />
            )}
          </div>

          <p className="text-lg font-semibold capitalize">{user?.name} </p>
          <p className="text-sm">{user?.role}</p>
        </div>

        <hr />
        {/* navigation */}
        <div className="pt-4">
          <nav className="flex flex-col p-2 gap-2 text-[18px]">
            <Link to={"allUsers"} className="p1-2 px-2 hover:bg-slate-100"> All User </Link>
            <Link to={"allProducts"} className="p1-2 px-2 hover:bg-slate-100"> Product </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full min-h-full">
        <Outlet/>
      </main>

    </div>
  );
};

export default AdminPanel;
