import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

//image for desktop
import image1 from "../assets/banner/img1.webp";
import image2 from "../assets/banner/img2.webp";
import image3 from "../assets/banner/img3.jpg";
import image4 from "../assets/banner/img4.jpg";
import image5 from "../assets/banner/img5.webp";

//image for mobile
import image1Mobile from "../assets/banner/img1_mobile.jpg";
import image2Mobile from "../assets/banner/img2_mobile.webp";
import image3Mobile from "../assets/banner/img3_mobile.jpg";
import image4Mobile from "../assets/banner/img4_mobile.jpg";
import image5Mobile from "../assets/banner/img5_mobile.png";

const desktopImages = [image1, image2, image3, image4, image5];

const mobileImages = [
  image1Mobile,
  image2Mobile,
  image3Mobile,
  image4Mobile,
  image5Mobile,
];

const BannerProduct = () => {

  //carousel
  const [currentImage, setCurrentImage] = useState(0);
 

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((pre) => pre + 1);
    }
  };

  const previousImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((pre) => pre - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage()
      }
      else{
        setCurrentImage(0)

      }
    }, 5000);

    return ()=> clearInterval(interval)
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 rounded">
      <div className="bg-slate-200 md:h-72 w-full h-60 relative">
        <div className="absolute z-10 w-full h-full hidden md:flex items-center">
          <div className="flex w-full justify-between text-2xl">
            <button className="bg-white p-1 text-2xl rounded-full shadow-md" onClick={previousImage}>
              <FaAngleLeft />
            </button>
            <button
              className="bg-white p-1 text-2xl rounded-full shadow-md"
              onClick={nextImage}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* image for desktop */}
        <div className="hidden w-full h-full overflow-hidden  md:flex">
          {desktopImages.map((img, index) => {
            return (
              <div
                className="w-full h-full min-h-full min-w-full translate-all"
                key={index}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={img} alt="image" className="h-full w-full" />
              </div>
            );
          })}
        </div>



        {/* image for mobile */}
        <div className="flex w-full h-full overflow-hidden  md:hidden">
          {mobileImages.map((img, index) => {
            return (
              <div
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
                className="w-full h-full min-h-full min-w-full translate-all"
                key={index}
              >
                <img
                  src={img}
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
