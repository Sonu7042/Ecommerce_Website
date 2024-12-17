import React from "react";
import CategoryList from "../componet/CategoryList";
import BannerProduct from "../componet/BannerProduct";
import HorizontalCardProduct from "../componet/HorizontalCardProduct";
import VerticalCardProduct from "../componet/VerticalCardProduct";


const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct categgory={"airpodes"} heading={"Top's Airpodes"}/> 
      <HorizontalCardProduct categgory={"watches"} heading={"Top's Watches"}/> 


      <VerticalCardProduct categgory={"mobiles"} heading={"Mobiles"}/> 
      <VerticalCardProduct categgory={"Mouse"} heading={"Mouse"}/> 
      <VerticalCardProduct categgory={"televisions"} heading={"Televisions"}/> 
      <VerticalCardProduct categgory={"refrigerator"} heading={"Refrigerators"}/> 
      <VerticalCardProduct categgory={"speakers"} heading={"Speakers"}/> 
      <VerticalCardProduct categgory={"trimmers"} heading={"Trimmers"}/> 
      <VerticalCardProduct categgory={"processor"} heading={"Processor"}/> 
      <VerticalCardProduct categgory={"printers"} heading={"Printers"}/> 
      <VerticalCardProduct categgory={"earphones"} heading={"Earphones"}/> 
      <VerticalCardProduct categgory={"camera"} heading={"Camera"}/> 
    </div>
  );
};

export default Home;
