import React from "react";
import { CgCloseO } from "react-icons/cg";

const DisplayImage = ({ onClose, imgUrl }) => {
  return (
    <div className="fixed bottom-0 top-0 left-0 right-0 flex justify-center  items-center">
      <div className="bg-white shadow-lg max-w-5xl p-4">

        <div className="w-fit ml-auto  text-2xl hover:text-red-600 cursor-pointer" onClick={onClose}>
          <CgCloseO />
        </div>

        <div className="flex justify-center p-4 max-w-[80vh] h-[400px]">
          <img src={imgUrl} alt="image"  className="w-full h-full"/>
        </div>

      </div>
    </div>
  );
};

export default DisplayImage;
