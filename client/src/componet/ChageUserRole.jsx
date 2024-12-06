import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Role from '../common/role'
import axios from 'axios'
import SummaryApi from '../common/index'
import { toast } from "react-toastify";

const ChageUserRole = ({name, email, role, userId, onClose, calFun}) => {


    const [userRole, setUserRole] = useState(role)
    

    const handleOnChangeSelect=(e)=>{
        setUserRole(e.target.value)

    }

    const updateUserRole=async ()=>{
 
      const response = await axios.post(SummaryApi.updateUser.url, {role:userRole, userId:userId}, {
        headers: { 
          token : localStorage.getItem('token')
        }
      } )
      if(response.data.success){
        toast.success(response.data.message)
        onClose()
        calFun()

      }


    }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0  w-full h-full flex justify-center items-center '>
      <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm  '>

        <button className='block ml-auto text-lg' onClick={onClose}>
        <IoClose />
        </button>

        <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>


        <div className='flex justify-center items-center my-4 '>
            <p>Role: </p>
            <select value={userRole} className='px-2 py-1 border' onChange={handleOnChangeSelect}>
                {
                    Object.values(Role).map((item)=>{
                        return (
                            <option value={item} key={item}>{item}</option>
                        )
                    })
                }
            </select>

        </div>


        <button  className='w-fit mx-auto block item rounded-full px-3 py-1 bg-red-600 hover:bg-red-700 text-white' onClick={updateUserRole}>Change Role</button>
      </div>
      
    </div>
  )
}

export default ChageUserRole
