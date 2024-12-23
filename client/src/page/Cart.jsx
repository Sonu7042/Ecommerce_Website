import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Context from "../context";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading]= useState(false)
  const loadingCart= new Array(4).fill(null)
  
  // console.log(data)

  const {fetchProductAddToCart}=useContext(Context)



  const addToCountProduct = async () => {
    const response = await axios.get(SummaryApi.addToCartProductView.url, {
      headers: {
        token: localStorage.getItem("token" ),
      },
    });
    if (response.data) {
      setData(response.data.data);
      // console.log(response.data.data);
    }

  };

  // console.log(data)
  
  useEffect(() => {
    setLoading(true)
    addToCountProduct();
    setLoading(false)
  }, []);


  const totolQuantity=data.reduce((previousValue, currentValue)=> previousValue + currentValue.quantity, 0)
  const totalPrice= data.reduce((pre, curr)=> pre + (curr.quantity * curr.productId.sellingPrice), 0)




  const decreaseQuantiy= async(id, qty)=>{
    const payload={_id: id, quantity: qty - 1}
    const response = await axios.post(SummaryApi.updateAddToCartProduct.url, payload, {
      headers:{
        token: localStorage.getItem("token"),
      }
    } )
  
    if(response.data.success){
      addToCountProduct()
    }

}




  const increaseQuantity=async(id, qty)=>{
    // console.log(qty)
    const payload={_id: id, quantity: qty + 1}
    const response = await axios.post(SummaryApi.updateAddToCartProduct.url, payload, {
      headers:{
        token: localStorage.getItem("token"),
      }
    } )
  
    if(response.data.success){
      addToCountProduct() 
    }

  }

  const deleteCartProduct=async(id)=>{
    const response=  await axios.post(SummaryApi.deleteAddToCartProduct.url, {_id: id},{
      headers:{
        token: localStorage.getItem("token"),
      }
    })

    // console.log(response)

    if(response.data.success){
       addToCountProduct()
      fetchProductAddToCart()
    }
    
  }



  return (
    <div className="container mx-auto">

      <div className="text-center text-lg my-3">
        {
          data.length ===0 && !loading && (
            <p className="bg-white py-5">Not Data</p>
          )
        }
      </div>


       <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
        {/* Display product  */}
        <div className="w-full max-w-3xl">
          {
            loading? (
              loadingCart.map((item, index)=>{
                return (
                  <div key={item+index} className="w-full bg-slate-200 h-32 my-2 border-slate-300 animate-pulse rounded"></div>
                )
              })
  
            ):(
              data.map((product, index)=>{
                return(
                  <div key={"product"+ index} className="w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]">
                    
                    <div className="w-32 h-32 bg-slate-200">
                      <img src={product?.productId.productImages[0]} alt="image" className="w-full h-full object-scale-down mix-blend-multiply"/>
                    </div>

                    <div className="px-4 py-2 relative ">
                      {/* adding delelte funtionality */}
                      <div className="absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer" onClick={()=>deleteCartProduct(product?._id)}>
                      <MdDelete/>
                      </div>

                      <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">{product.productId.productName}</h2>
                      <p className="capitalize text-state-500">{product.productId.category}</p>

                      <div className="flex items-center justify-between">
                        <p className="text-red-600 font-medium text-lg">{`₹${product.productId.sellingPrice}`}</p>
                        <p className="text-slate-600 font-semibold text-lg">{`₹${product.productId.sellingPrice * product.quantity}`}</p>
                      </div>

                      <div className="flex items-center gap-3 mt-1">
                        <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded" onClick={()=>decreaseQuantiy(product?._id, product?.quantity)}>-</button>
                        <span>{product?.quantity}</span>
                        <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded" onClick={()=>increaseQuantity(product?._id, product?.quantity)}>+</button>

                      </div>

                      
                    </div>
               
                  </div>
                )


              })
            )
          }
        </div>



         {/* summary and payment */}
         <div className="mt-5 lg:mt-0 w-full max-w-sm">
          {
            loading ?(
              <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
             
            ):(
              <div className="h-36 bg-white">
                <h2 className="text-white bg-red-600 px-4 py-1">Summary</h2>
                <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
                  <p>Quantity</p>
                  <p>{totolQuantity}</p>
                </div>

                <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
                  <p>Totol Price</p>
                  <p>{`₹${totalPrice}`}</p>
                </div>


                <button className="bg-blue-600 p-2 text-white w-full mt-2">Payment </button>
              </div>


            )
          }


         </div>

      

       </div>
    </div>
  );
};

export default Cart;
