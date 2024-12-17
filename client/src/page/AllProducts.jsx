import React, { useEffect, useState } from "react";
import UploadProduct from "../componet/UploadProduct";
import SummaryApi from '../common/index'
import axios  from "axios";
import AdminProductCard from "../componet/AdminProductCard";

const AllProducts = () => {
  const [openUploadProduct, setopenUploadProduct] = useState(false);

  const [allProduct, setAllProduct]=useState([])


  console.log(allProduct)

  const fetchProduct= async()=>{
    const response= await axios.get(SummaryApi.allProduct.url)
    setAllProduct(response?.data.data)
  }

  useEffect(()=>{
    fetchProduct()
  }, [])


  return (
    <div>

      <div className="bg-white  flex justify-between items-center px-4 py-2">
        <h2 className="font-bold text-lg">All Product</h2>
        <button className="border-2 py-1 px-3 rounded-full border-red-600 text-red-600 hover:text-red-700 translate-all" onClick={()=>setopenUploadProduct(true)}>Upload Product</button>
      </div>

      <div className="flex gap-5 py-2 ml-2 items-center  flex-wrap  h-[calc(100vh-200px)] overflow-y-scroll ">
        {
          allProduct.map((product, index)=>{
            return(
              <AdminProductCard  data={product} key={index +"sonu"} fetchData={fetchProduct}  />

            )
          })
        }
      </div>


      {openUploadProduct && (
        <UploadProduct onClose={() => setopenUploadProduct(false)} fetchData={fetchProduct} />
      )}
    </div>
  );
};

export default AllProducts;
