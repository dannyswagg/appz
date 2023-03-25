import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#ececec] px-[10%] py-20 flex justify-between">
        <div className="relative lg:block md:hidden hidden">
          <div className="absolute bg-[#c4c4c4] bottom-4 h-[24rem] w-96"></div>
        </div>
        <div>
          <h1 className="font-bold text-5xl mb-4">
            Lorem ipsum dolor <br /> sit amet.
          </h1>
          <p className="text-[#636262] text-justify">
            Lorem ipsum, dolor sit amet
            <br /> consectetur adipisicing elit. fixed bottom-0 w-full
            Recusandae voluptate natus saepe
            <br /> ex, sed ipsam aliquid ullam iste?
          </p>
          <button className="bg-black rounded-md text-white px-8 py-3 mt-8">
            CalltoAction
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
