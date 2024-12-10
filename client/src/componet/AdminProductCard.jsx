import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";

const AdminProductCard = ({ data, fetchData }) => {

  const  [editProduct, setEditProduct]=useState(false)

  return (
    <div className="bg-white p-2 rounded">
      <div className="w-40">
        <div className="w-32 h-32 flex justify-center items-start">
          <img
            src={data.productImages[0]}
            alt="image"
            width={120}
            height={120}
            className="m-auto object-fill"
          />
        </div>

        <h1 className="text-ellipsis line-clamp-2 ">{data.productName}</h1>

        <div>
          <p className="font-semibold">{data.sellingPrice}</p>
          <div className=" w-fit ml-auto bg-green-200 hover:bg-green-600 p-2 rounded-full hover:text-white cursor-pointer" onClick={()=>setEditProduct(true)}>
          <MdModeEdit />
          </div>
        </div>
      </div>


      {
        editProduct && (
          <AdminEditProduct productData={data} fetchAllData={fetchData}  onClose={()=>setEditProduct(false)} />
        )
      }


    </div>
  );
};

export default AdminProductCard;
