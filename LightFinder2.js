import React, { useState, useEffect } from "react";
import "../pages/LightFinder2.css";
import Navbargrey from "../Components/Navbargrey";
import { Link } from "react-router-dom";

import "./LightFinder2.css";
import { RxCross2 } from "react-icons/rx";

// importing default states images ................................
import Home_default from "../images/Home_default.png";
import Office3_default from "../images/Office3.png";
import Hotel_default from "../images/Hotel.png";
import Cafe_default from "../images/Cafe.png";
import Restaurant_default from "../images/Restaurant.png";
import shop_default from "../images/Shop.png";
import Museum_default from "../images/Exhibition.png";

import Factory_default from "../images/Factory.png";
import Warehouse_default from "../images/Warehouse2.png";
import Corporate_default from "../images/Corporate event.png";
import Concert_default from "../images/Concerts.png";
import Celebration_default from "../images/Celebration.png";
import Sports_default from "../images/Sports.png";
import Hospital_default from "../images/Hospital.png";

import Street_default from "../images/Street.png";
import Park_default from "../images/Park.png";
import Garden_default from "../images/Garden.png";
import Facade_default from "../images/Facade.png";
import Yacht_default from "../images/Yacht.png";
import Airplane_default from "../images/Airplane.png";
import Loco_default from "../images/Locomotives.png";

// importing back and next btn arrow image..................
import backbtn from "../images/backbtn.png";
import nextBtn from "../images/nextbtn.png";

// importing bg image
import EllipseFinderdecobg from "../images/EllipseFinderdecobg.png";

const LightFinder2 = () => {
  const lightStyles = {
    LightImg: {
      backgroundImage: "url('../images/EllipseFinderdecobg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };

  // popups..................................
  const [home, setHome] = useState(false);

  return (
    <div className=" h-full relative">
      <div>
        <Navbargrey />
      </div>
      <div
        className="px-28 md:pb-64 bg-[#E4E4E7]"
        style={{
          ...lightStyles.LightImg,
          backgroundImage: `url(${EllipseFinderdecobg})`,
        }}
      >
        <div>
          <p className="pl-8 pt-8 text-lg">Where do you need light ?</p>
        </div>

        <div className="text-black text-center grid grid-cols-7 gap-4 px-8  mt-5 ">
          <div className="bg-white w-3/4 flex flex-col items-center justify-center rounded-md">
            <img className="w-16 box" src={Home_default} alt="" />
            <p className="pt-2">Home</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Office3_default} alt="" />
            <p className="pt-2">Office</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Hotel_default} alt="" />
            <p className="pt-2">Hotel</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Cafe_default} alt="" />
            <p className="pt-2">Cafe</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Restaurant_default} alt="" />
            <p className="pt-2">Restaurant</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={shop_default} alt="" />
            <p className="pt-2">shop</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Museum_default} alt="" />
            <p className="pt-2">Museum</p>
          </div>

          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Factory_default} alt="" />
            <p className="pt-2">Factory</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Warehouse_default} alt="" />
            <p className="pt-2">Warehouse</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Corporate_default} alt="" />
            <p className="pt-2">Corporate</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Concert_default} alt="" />
            <p className="pt-2">Concert</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md  ">
            <img className="w-16 box" src={Celebration_default} alt="" />
            <p className="pt-2">Celerbration</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md  ">
            <img className="w-16 box" src={Sports_default} alt="" />
            <p className="pt-2">Sports</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Hospital_default} alt="" />
            <p className="pt-2">Hospital</p>
          </div>

          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Street_default} alt="" />
            <p className="pt-2">Street</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Park_default} alt="" />
            <p className="pt-2">Park</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Garden_default} alt="" />
            <p className="pt-2">Garden</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Facade_default} alt="" />
            <p className="pt-2">Facade</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Yacht_default} alt="" />
            <p className="pt-2">Yactch</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Airplane_default} alt="" />
            <p className="pt-2">Airplane</p>
          </div>
          <div className="bg-white w-3/4 p-4  flex flex-col items-center justify-center rounded-md ">
            <img className="w-16 box" src={Loco_default} alt="" />
            <p className="pt-2">Loco</p>
          </div>
        </div>

        <div className=" px-8 mt-8 flex gap-5 ">
          <Link to="/lightfinder">
            <div className="flex gap-6 bg-transparent border-2 border-solid border-[#7246FD] px-6 py-2 hover:bg-[#7246FD] hover:text-white ">
              <img src={backbtn} alt="" />
              <button>Back</button>
            </div>
          </Link>
          <Link to="/lightfinder3">
            <div className="flex gap-6 bg-[#7246FD] border-2 border-solid border-[#7246FD] px-6 py-2 ">
              <button className="text-white">Next</button>
              <img src={nextBtn} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LightFinder2;
