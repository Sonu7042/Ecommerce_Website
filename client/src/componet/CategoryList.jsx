import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../common";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [loading, setLoading] = useState(false);
  const [categoryProduct, setCategoryProduct]=useState([])

  const categoryLoading = new Array(13).fill(null);


  const fetchCategoryProduct = async () => {
    setLoading(true)
    const response = await axios.get(SummaryApi.productCategory.url);
    setLoading(false)
    setCategoryProduct(response.data.data)
  };

  useEffect(() => {
    fetchCategoryProduct();
  },[]);


  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between gap-4 overflow-scroll scrollbar-none">

        {loading ? (
          categoryLoading.map((element, index)=>{
            return(
              <div className="h-16 w-16 md:h-20 rounded-full bg-slate-200  overflow-hidden animate-pulse " key={"category" + index}></div>
            )
          })

        ) : (
           categoryProduct.map((product, index)=>{
            return(
              <Link to={"/product-category?category="+product?.category} className="cursor-pointer" key={product + index} >

                <div className="h-16 w-16 md:h-20 rounded-full overflow-hidden bg-slate-200 p-4 flex justify-center items-center">
                  <img src={product?.productImages[0]} alt="image"  className="h-full object-scale-down  mix-blend-multiply  hover:scale-125 translate-all"/>
                </div>

                <p className="text-center text-sm md:text-base capitalize">{product?.category}</p>
              </Link>

            )
              
            })
        ) 
      }


      </div>
    </div>
  );
};

export default CategoryList;
