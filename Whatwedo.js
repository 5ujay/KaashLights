import React from "react";
import { useState, useRef, useEffect } from "react";
import vector from "../images/Arrowblack90right.png";
import "./whatwedo.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EllipseRed from "../images/redellipse.png";
import VectorLeft from "../images/Arrowblack90left.png";
import Contactpop from "../Components/Contactpop";
import AOS from "aos";
import "aos/dist/aos.css";

function Whatwedo() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setBlurBackground(!blurBackground);
  };

  const [show, setShow] = useState(false);

  const [showw, setShoww] = useState(false);

  const [showww, setShowww] = useState(false);

  const [showwww, setShowwww] = useState(false);

  const [showwwww, setShowwwww] = useState(false);

  const [showwwwww, setShowwwwww] = useState(false);

  return (
    <>
      <div className={blurBackground ? "blur-background bg-black" : "bg-black"}>
        <Navbar />
        <div className="overflow-hidden ">
          <section className="bg-black relative">
            <img class="ms-auto w-10/12 md:w-7/12" src={EllipseRed} />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 
            overflow-hidden bg-fixed"
            >
              <div className="grid gap-y-9 md:gap-y-14 xl:gap-y-24 pt-12 sm:pt-16 md:pt-36 xl:pt-44 xl:ml-32 md:ml-28 ml-4">
                <h2 className="font-light text-5xl xl:text-9xl/tight lg:text-7xl/tight text-neutral-100 ">
                  What we do?
                </h2>
                <h4 className="lg:text-xl xl:text-2xl text-xs font-light text-neutral-100 w-3/4 md:w-2/5">
                  We use light to create spaces where people feel good. Using
                  full potential of light we build comfortable homes, inspiring
                  institutions and playful environments. Working towards
                  sustainable human centric solutions, we help our clients find
                  the perfect light for their project. <br />
                  <br />
                  From heritage buildings to modern offices we fuse intelligent
                  technology with efficient solutions for a greener planet.
                </h4>
              </div>
            </div>
          </section>
          <div className="font-light text-neutral-50 ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-5xl ">
            Our services
          </div>
          <div className="bg-[#E5E7EB] mt-16 flex xl:py-9 md:py-7 py-5 items-center justify-center md:justify-start">
            <span className="font-light text-black ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-6xl ">
              Human centric design
            </span>
            <img
              className="xl:h-16 lg:h-12 h-8 ml-16 md:ml-28 xl:ml-32"
              alt="button"
              src={vector}
              onClick={() => {
                setShow(true);
                setBlurBackground(!blurBackground);
              }}
            />
          </div>
          <div className="bg-[#E5E7EB] mt-11 flex xl:py-9 md:py-7 py-5">
            <span className="font-light text-black ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-6xl ">
              Sustainable spaces
            </span>
            <img
              className="xl:h-16 lg:h-12 h-8 ml-24 md:ml-36 xl:ml-52"
              alt="button"
              src={vector}
              onClick={() => {
                setShoww(true);
                setBlurBackground(!blurBackground);
              }}
            />
          </div>
          <div className="bg-[#E5E7EB] mt-11 flex xl:py-9 md:py-7 py-5">
            <span className="font-light text-black ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-6xl ">
              Light engineering
            </span>
            <img
              className="xl:h-16 lg:h-12 h-8 ml-32 md:ml-44 xl:ml-64"
              alt="button"
              src={vector}
              onClick={() => {
                setShowww(true);
                setBlurBackground(!blurBackground);
              }}
            />
          </div>
          <div className="font-light text-neutral-50 mt-[6rem] lg:mt-[8rem] xl:mt-[10.43rem] ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-5xl">
            Do you have a light project ?
          </div>
          <div className="font-light text-neutral-50 mt-[.5rem] lg:mt-[1rem] xl:mt-[1.5rem] ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-5xl ">
            Check below for project pricing.
          </div>
          <div className="bg-[#E5E7EB] mt-24 lg:mt-32 xl:mt-40 flex xl:py-9 md:py-7 py-5">
            <span className="font-light text-black ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-6xl ">
              Individual project
            </span>
            <img
              className="xl:h-20 lg:h-12 h-8 ml-16 md:ml-28 xl:ml-32"
              alt="button"
              src={vector}
              onClick={() => {
                setShowwww(true);
                setBlurBackground(!blurBackground);
              }}
            />
          </div>
          <div className="bg-[#E5E7EB] mt-11 flex xl:py-9 md:py-7 py-5">
            <span className="font-light text-black ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-6xl ">
              Public and private company
            </span>
            <img
              className="xl:h-20 lg:h-12 h-8 ml-16 md:ml-28 xl:ml-32"
              alt="button"
              src={vector}
              onClick={() => {
                setShowwwww(true);
                setBlurBackground(!blurBackground);
              }}
            />
          </div>
          <div className="bg-[#E5E7EB] mt-11 flex xl:py-9 md:py-7 py-5">
            <span className="font-light text-black ml-4 md:ml-28 xl:ml-32 text-2xl lg:text-4xl xl:text-6xl ">
              Architects &amp; Engineers
            </span>
            <img
              className="xl:h-20 lg:h-12 h-8 ml-16 md:ml-28 xl:ml-32"
              alt="button"
              src={vector}
              onClick={() => {
                setShowwwwww(true);
                setBlurBackground(!blurBackground);
              }}
            />
          </div>
          <div className="ml-4 md:ml-28 xl:ml-32 mt-8 md:mt-32 xl:mt-40 mb-20 md:mb-36 xl:mb-56">
            <button
              className="px-4 py-2 bg-[#E5E7EB] text-base md:text-xl xl:text-2xl font-light"
              onClick={togglePopup}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        {/* Human-centric design */}
        {show ? (
          <div className="w-full bg-white contactpop-section">
            <div className="relative flex">
              <span className="text-3xl lg:text-5xl xl:text-7xl font-light mt-3.4 md:mt-6 xl:mt-8 ml-4 md:ml-28 xl:ml-32">
                Human-centric design
              </span>
              <button
                className="text:4xl lg:text-5xl xl:text-6xl mt-3.4 md:mt-6 xl:mt-8 ms-auto mr-16 md:mr-24 xl:mr-48"
                onClick={() => {
                  setShow(false);
                  setBlurBackground(!blurBackground);
                }}
              >
                ✖
              </button>
            </div>
            <div className="relative flex mt-4 md:mt-8 xl:mt-16 mb-16 md:mb-24 xl:mb-36 text-base lg:text-xl xl:text-2xl flex-wrap">
              <div className="w-60 lg:w-96 ml-4 md:ml-28 xl:ml-32">
                Creating lighting solutions specific to your needs. With user
                centred design approach we optimise space use, promote user
                well-being, and enhance overall experience with light.
              </div>
              <div className="w-40 lg:w-60 ml-4 md:ml-28 xl:ml-32">
                <text>Deliverables</text>
                <text>Light visuals </text>
                <text> Light study</text>
                <text>Tender document</text>
                <text>Construction drawings</text>
              </div>
            </div>
          </div>
        ) : null}

        {/* Sustainable Process */}
        {showw ? (
          <div className="w-full bg-white contactpop-section">
            <div className="relative flex">
              <span className="text-3xl lg:text-5xl xl:text-7xl font-light mt-3.4 md:mt-6 xl:mt-8 ml-4 md:ml-28 xl:ml-32">
                Sustainable Process
              </span>
              <button
                className="text:4xl lg:text-5xl xl:text-6xl mt-3.4 md:mt-6 xl:mt-8 ms-auto mr-16 md:mr-24 xl:mr-48"
                onClick={() => {
                  setShoww(false);
                  setBlurBackground(!blurBackground);
                }}
              >
                ✖
              </button>
            </div>
            <div className="relative flex mt-4 md:mt-8 xl:mt-16 mb-16 md:mb-24 xl:mb-36 text-base lg:text-xl xl:text-2xl flex-wrap">
              <div className="w-60 lg:w-96 ml-4 md:ml-28 xl:ml-32">
                Improving efficiency of your infrastructure, either a building
                or a city. With detailed light study we implement sustainable
                solutions to improve your energy efficiency and reduce carbon
                footprint.
              </div>
              <div className="w-40 lg:w-60 ml-4 md:ml-28 xl:ml-32">
                <text>Deliverables</text>
                <text>Light audit</text>
                <text>Energy report</text>
                <text>Carbon reduction</text>
                <text>Project management</text>
                <text>Before & After assessment</text>
              </div>
            </div>
          </div>
        ) : null}

        {/* Light engineering */}
        {showww ? (
          <div className="w-full bg-white contactpop-section">
            <div className="relative flex">
              <span className="text-3xl lg:text-5xl xl:text-7xl font-light mt-3.4 md:mt-6 xl:mt-8 ml-4 md:ml-28 xl:ml-32">
                Light engineering
              </span>
              <button
                className="text:4xl lg:text-5xl xl:text-6xl mt-3.4 md:mt-6 xl:mt-8 ms-auto mr-16 md:mr-24 xl:mr-48"
                onClick={() => {
                  setShowww(false);
                  setBlurBackground(!blurBackground);
                }}
              >
                ✖
              </button>
            </div>
            <div className="relative flex mt-4 md:mt-8 xl:mt-16 mb-16 md:mb-24 xl:mb-36 text-base lg:text-xl xl:text-2xl flex-wrap">
              <div className="w-60 lg:w-96 ml-4 md:ml-28 xl:ml-32">
                Light is scientific in its origin, a good lighting tool should
                be a well engineered product to deliver best performance.
                Through light engineering we identify the ideal lighting
                solution for your project to create the perfect lighting.
              </div>
              <div className="w-40 lg:w-60 ml-4 md:ml-28 xl:ml-32">
                <text>Deliverables</text>
                <text>Led assessment</text>
                <text>Product mock-ups</text>
                <text>Light programming</text>
                <text>Projection mapping</text>
                <text>Scenography</text>
              </div>
            </div>
          </div>
        ) : null}

        {showwww ? (
          <div className="w-full bg-white contactpop-section flex flex-wrap">
            <button
              className="my-3.4 md:my-6 xl:my-8  ml-8 md:ml-28 xl:ml-32"
              onClick={() => {
                setShowwww(false);
                setBlurBackground(!blurBackground);
              }}
            >
              <img
                className="xl:h-20 lg:h-12 h-8"
                alt="Vector"
                src={VectorLeft}
              />
            </button>
            <div className="text-3xl lg:text-5xl xl:text-7xl font-light xl:py-9 md:py-7 py-5 ml-10 md:ml-28 xl:ml-32">
              {" "}
              3€ / m2
            </div>
          </div>
        ) : null}

        {showwwww ? (
          <div className="w-full bg-white contactpop-section flex flex-wrap">
            <button
              className="my-3.4 md:my-6 xl:my-8  ml-8 md:ml-28 xl:ml-32"
              onClick={() => {
                setShowwwww(false);
                setBlurBackground(!blurBackground);
              }}
            >
              <img
                className="xl:h-20 lg:h-12 h-8"
                alt="Vector"
                src={VectorLeft}
              />
            </button>
            <div className="text-3xl lg:text-5xl xl:text-7xl font-light my-4 md:my-6 xl:my-8 ml-10 md:ml-28 xl:ml-32">
              {" "}
              9€ / m2
            </div>
          </div>
        ) : null}

        {showwwwww ? (
          <div className="w-full bg-white contactpop-section flex flex-wrap">
            <button
              className="my-3.4 md:my-6 xl:my-8  ml-8 md:ml-28 xl:ml-32"
              onClick={() => {
                setShowwwwww(false);
                setBlurBackground(!blurBackground);
              }}
            >
              <img
                className="xl:h-20 lg:h-12 h-8"
                alt="Vector"
                src={VectorLeft}
              />
            </button>
            <div className="text-3xl lg:text-5xl xl:text-7xl font-light my-4 md:my-6 xl:my-8 ml-10 md:ml-28 xl:ml-32">
              {" "}
              6€ / m2
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
      <div className="xl:px-96 px-10 w-screen  contactpop-section">
        {showPopup && <Contactpop onClose={togglePopup} />}
      </div>
    </>
  );
}

export default Whatwedo;
