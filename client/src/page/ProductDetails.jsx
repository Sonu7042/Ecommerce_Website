import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SummaryApi from "../common";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const ProductDetails = () => {
  const params = useParams();
  const [activeImage, setActiveImage] = useState(null);
  const [zoomImage, setzoomImage]=useState(false)
  const [loading, setLoading] = useState(false)
  const productImageListLoading=new Array(4).fill("")

  const [zoomImageCoordinate, setZoomImageCoordinate]=useState({x:0, y:0})
//   console.log(zoomImageCoordinate)

  const [data, setData] = useState("")


  const handleMouseEnterProduct=(imageUrl)=>{
    setActiveImage(imageUrl)

  }
 

  const fetchProductDetails = async () => {
    setLoading(true)
    const response = await axios.post(SummaryApi.productDetails.url, {
      productId: params.id,
    });
    setLoading(false)
    setData(response.data.data);
    
    setActiveImage(response.data.data.productImages[0]);
  };


  useEffect(() => {
    fetchProductDetails();
  }, [params]);


  const  handleBuyProduct=()=>{

  }

  const handleAddToCart=()=>{

  }


  const handleZoomImage=useCallback((e)=>{
    // console.log(e.target.getBoundingClientRect());
    setzoomImage(true)
    const {top, left, width, height} = e.target.getBoundingClientRect()
    
    const x= (e.clientX - left) / width
    const y= (e.clientY - top) / height


    setZoomImageCoordinate({x, y})

  },[zoomImageCoordinate])


  

  const handleLeaveZoomImage=()=>{
    setzoomImage(false)

  }


  return (
    <div className="container mx-auto p-4">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4 ">

        {/* product image  */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
            <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2">
                <img src={activeImage} alt="image"  className="w-full h-full object-scale-down mix-blend-multiply" onMouseMove={handleZoomImage} onMouseLeave={handleLeaveZoomImage} />

             {/* image zoom */}

                {
                    zoomImage && (
                        <div className=" lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0">
                            <div className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150"
                            style={{ 
                                backgroundImage: `url(${activeImage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition : `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}%`,
                             }}
                            >

                            </div>
                        
                        </div>
                    )
                }
            </div>



        <div className="h-full">
            {
                loading? (
                    <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                        {
                            productImageListLoading.map((element, index)=>{
                                return(
                                <div className="h-20 w-20 bg-slate-200 rounded animate-pulse" key={index} ></div>
                                )
                            })

                        }

                    </div>


                ):(
                    <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                        {
                            data?.productImages?.map((imageUrl, index)=>{
                                return(
                                    <div className="h-20 w-20 bg-slate-200 rounded p-1" key={index} >
                                    <img src={imageUrl} alt="image" className="w-full h-full mix-blend-multiply object-scale-down cursor-pointer" onMouseEnter={()=>handleMouseEnterProduct(imageUrl)} onClick={()=>handleMouseEnterProduct(imageUrl)} />
                                    </div>

                                )
                                
                            })

                        }

                    </div>
                )
            }

        </div>
        </div>



        {/* this is product-Details */}
        {
            loading? (
                <div className="grid gap-1 w-full">
                    <p className="bg-slate-200 animate-pulse h-6 lg:h-8 w-full rounded-full inline-block"></p>
                    <h2 className="text-2xl lg:text-4xl font-medium h-6 lg:h-6 bg-slate-200 animate-pulse w-full"></h2>
                    <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>
                    <div className='text-red-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full'> </div>

                    <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full'>
                     <p className='text-red-600 bg-slate-200 w-full'></p>
                     <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
                   </div>

                   <div className='flex items-center gap-3 my-2 w-full'>
                    <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                    <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                  </div>

                  <div className='w-full'>
                   <p className='text-slate-600 font-medium my-1 h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></p>
                   <p className='bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full'></p>
                 </div>

                </div>
            ):(
                <div className="grid gap-1 w-full">
                <p className="bg-red-200 text-red-600 w-fit px-2  rounded-full inline-block">{data?.brandName}</p>
                <h2 className="text-2xl lg:text-4xl font-medium">{data?.productName}</h2>
                <p className='capitalize text-slate-400'>{data?.category}</p>
                <div className='text-red-600  flex items-center gap-1 '>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
               </div>

                <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                 <p className='text-red-600'>{`₹${data?.sellingPrice}`}</p>
                 <p className='text-slate-400 line-through'>{`₹${data?.price}`}</p>
               </div>

               <div className='flex items-center gap-3 my-2'>
                  <button onClick={(e)=>handleBuyProduct(e, data?._id)} className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white'>Buy</button>
                  <button  onClick={(e)=>handleAddToCart(e, data?._id)} className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white'>Add To Cart</button>
                </div>


              <div className='w-full'>
               <p className='text-slate-600 font-medium my-1'>Description : </p>
               <p>{data?.description}</p>
             </div>

            </div>
            )

            

        }




      </div>
    </div>
  );
};

export default ProductDetails;
