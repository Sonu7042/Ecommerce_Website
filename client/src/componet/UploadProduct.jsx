import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import productCategory from "../helper/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UploadProduct = ({onClose}) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    decription: "",
    price: "",
    sellingPrice: "",
  });

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  };

  const handleUploadProductImage = (e) => {

  };

  return (
    <div className="bg-slate-200 bg-opacity-35 fixed w-full h-full top-0 left-0 right-0 bottom-0 flex  justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden ">

        <div className="flex justify-center items-center pb-3 relative">
          <h2 className="font-bold text-lg ">Upload Product</h2>
          <div className="absolute top-0 right-0 text-2xl hover:text-red-600 cursor-point"  onClick={onClose}>
            <CgCloseO />
          </div>
        </div>

        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5">
          <label htmlFor="productName" className="mt-2">
            Product Name :
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            name="productName"
            className="border bg-slate-100 p-2 rounded"
            required
            value={data.productName}
            onChange={handleOnChange}
          />

          <label htmlFor="brandName" className="mt-3">
            Brand Name :
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="Enter brand name"
            name="brandName"
            className="border bg-slate-100 p-2 rounded"
            required
            value={data.brandName}
            onChange={handleOnChange}
          />

          <label htmlFor="category" className="mt-3">
            Category :
          </label>
          <select
            name="category"
            value={data.category}
            onChange={handleOnChange}
            required
            className="p-2 bg-slate-100 rounded border"
          >
            <option value="">Select category</option>
            {productCategory.map((item, index) => {
              return (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="flex items-center justify-center  text-slate-500 flex-col gap-2">
                <span className="text-4xl">
                  {" "}
                  <FaCloudUploadAlt />{" "}
                </span>
                <p>Upload Image</p>
                <input
                  type="file"
                  className="hidden"
                  id="uploadImageInput"
                  onChange={handleUploadProductImage}
                />
              </div>
            </div>
          </label>

          <div>
            {data?.productImage[0] ? (
              <div className="flex items-center gap-2">
                {data.productImage.map((item, index) => {
                  return (
                    <div className="relative ">
                      <img
                        src={item}
                        alt="image"
                        height={80}
                        width={80}
                        className="bg-slate-100 cursor-pointer border"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(item);
                        }}
                      />

                      <div className="absolute bottom-0 right-0 p-1  text-white bg-red-600 rounded-full group-hover:block cursor-pointer">
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>
                <span className="text-red-500">*</span> Please Upload Product
                Image
              </p>
            )}
          </div>

          <label htmlFor="price" className="mt-3">
            Price :
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter price "
            name="price"
            className="border bg-slate-100 p-2 rounded"
            required
            value={data.price}
            onChange={handleOnChange}
          />

          <label htmlFor="sellingPrice" className="mt-3">
            selling Price :
          </label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter selling Price"
            name="sellingPrice"
            className="border bg-slate-100 p-2 rounded"
            required
            value={data.sellingPrice}
            onChange={handleOnChange}
          />



          <label htmlFor="description" className="mt-3">
          description :
          </label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter  product description"
            name="description"
            className="border bg-slate-100 p-2 h-28 resize-none"
            required
            value={data.description}
            onChange={handleOnChange}
          />



          <button className="bg-red-600 px-3 py-2  text-white mb-10 mt-5 hover:bg-red-700">Upload Product</button>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
