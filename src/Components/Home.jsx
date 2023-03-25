import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="lg:px-[10%] md:px-[10%] px-[10%] pb-20 mb-20">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-20 lg:gap-16 md:gap-16 sm:gap-8">
          <div className="mb-20">
            <h1 className="font-bold lg:text-4xl md:text-4xl text-3xl md mb-4">
              Lorem ipsum <br />
              dolor sit amet <br /> consectetur.
            </h1>
            <p className="text-[#c4c4c4] mb-5">
              Lorem ipsum dolor sit, amet adipisicing elit. Officiis repellat
              qui libero ipsum esse.
            </p>
            <div className="flex flex-row">
              <NavLink to="/products">
                <button className="bg-black text-white py-2 mr-4 px-3 rounded mb-5 font-bold">
                  CalltoAction
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="border border-black lg:py-2 md:py-1 sm:py-1 px-4 text-black rounded mb-5 font-bold">
                  See Workspace
                </button>
              </NavLink>
            </div>
          </div>
          <div className="image-container">
            <div className="bg-[#c4c4c4] box1"></div>
            <div className="bg-[#9d9d9d] box2"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:gris-cols-3 sm:grid-cols-1 gap-5 lg:pt-32 md:pt-20 pt-8 pb-20">
          <div>
            <h1 className="font-bold text-2xl">Header Text</h1>
            <p className="text-[#c4c4c4]">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. Perspiciatis eligendi qui <br />
              repudiandae unde reiciendis, adipisci ipsum in modi impedit vitae.
            </p>
          </div>
          <div className="bg-[#c4c4c4]">
            <div className="text-[c4c4c4] w-1/2 h-96" src="" alt=""></div>
          </div>
          <div className="relative layer">
            <div className="absolute lg:bottom-0 md:bottom-20 sm:bottom-20 right-0">
              <h1 className="font-bold text-2xl">Header Text</h1>
              <p className="text-[#c4c4c4]">
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit. Perspiciatis eligendi qui
                <br /> repudiandae unde reiciendis, adipisci ipsum in modi
                impedit vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
