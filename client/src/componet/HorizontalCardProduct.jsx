import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../helper/fetchCategoryWiseProduct'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import addToCart from '../helper/addtoCard';
import Context from '../context';

const HorizontalCardProduct = ({categgory, heading}) => {

  const [data, setData]=useState([])

  const {fetchProductAddToCart}=useContext(Context)

  const [loading, setLoading]=useState(false)
  const loadingList= new Array(13).fill(null)


  const handleAddToCart=async(e, id)=>{
    await addToCart(e, id)
    fetchProductAddToCart()
  }


  
    const fetchData=async()=>{
      setLoading(true)
      const categoryProduct= await fetchCategoryWiseProduct(categgory)
      setLoading(false)
      setData(categoryProduct.data.data)
    }



    useEffect(()=>{
      fetchData()
    }, [])




    const scrollElement=useRef()

    const scrollRight=()=>{
      // console.log("working")
      scrollElement.current.scrollLeft += 300
    }

    const scrollLeft=()=>{
      scrollElement.current.scrollLeft -= 300
    }

  return (
    <div className='container mx-auto px-4 py-6 relative'>
       <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

         <div className='flex items-center gap-5 md:gap-6 overflow-scroll scrollbar-none transition-all ' ref={scrollElement}>
          
          <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft /></button>
          <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight /></button>
    

          {
            loading ? (
             loadingList.map((product, index)=>{
              return(
                <div key={index} className='w-full min-w-[280px] md:min-w-[320px] md:max-w-[320px]  max-w-[280px] h-36  bg-white rounded-sm  flex '>
                  <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>

                  </div>

                  <div className="grid w-full p-4 gap-2">
                    <h2 className='font-medium  text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full' ></h2>
                    <p className='capitalize text-slate-400 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                    <div className='flex p-4 w-full gap-2'>
                      <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                      <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                      <p></p>
                    </div>
                    <button className='text-sm text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>

                  </div>

                </div>
              )
             })

            ):(
              data.map((product, index)=>{
                return(
                  <Link to={"product/"+product?._id} key={index} className='w-full min-w-[280px] md:min-w-[320px] md:max-w-[320px]  max-w-[280px] h-36  bg-white rounded-sm  flex '>
                  <div className='bg-slate-200 h-full  min-w-[120px] md:min-w-[145px] '>
                    <img src={product.productImages[0]} alt="image" className='object-scale-down h-full hover:scale-110 transition-all' />

                  </div>

                  <div className="grid w-full p-4 ">
                    <h2 className='font-medium  text-base md:text-lg text-ellipsis line-clamp-1 text-black' >{product?.productName}</h2>
                    <p className='capitalize text-slate-400 '>{product?.category}</p>
                    <div className='flex gap-3'>
                      <p className='text-red-600 font-medium '>{`₹${product?.sellingPrice}`}</p>
                      <p className='text-slate-500 line-through'>{`₹${product?.price}`}</p>
                    </div>
                    <button className='text-sm text-white px-3 py-0.5 rounded-full w-full bg-red-600 z-50' onClick={(e)=>handleAddToCart(e, product?._id)}>Add to Cart</button>


                  </div>

                </Link>
                

                )
              })
              
            )

          }

      
         </div>


      
    </div>
  )
}

export default HorizontalCardProduct
