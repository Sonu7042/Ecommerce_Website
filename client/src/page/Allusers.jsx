import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../common/index";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import ChangeUserRole from '../componet/ChageUserRole'

const Allusers = () => {
  const [allUsers, setAllUsers] = useState([]);
 

  const [openUpdateRole, setOpenUpdateRole]=useState(false)


  const [updateUserDetails, setUpdateUserDetails]=useState("")


  const fetchAllUsers = async () => {
    const response = await axios.get(SummaryApi.allUsers.url);
    if (response.data.success) {
      setAllUsers(response.data.data);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr >
            <th>Sr</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {allUsers.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>{moment(user?.createdAt).format("LLL")}</td>
                <td>
                  <button onClick={()=>{
                    setOpenUpdateRole(true)
                    setUpdateUserDetails(user)
                    }} 
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-400 hover:text-white">
                    <MdEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


      {
        openUpdateRole && (
            <ChangeUserRole 
              onClose ={()=>setOpenUpdateRole(false)}
             name={updateUserDetails.name} 
             email={updateUserDetails.email}
             role={updateUserDetails.role}
             userId={updateUserDetails._id}
             calFun={fetchAllUsers}
             />

        )
      }

    </div>
  );
};

export default Allusers;
