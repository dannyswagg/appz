import React from "react";

const Home = () => {
  return (
    <>
      <div className="lg:px-[10%] md:px-[10%] sm:px-[10%] pb-20 mb-20">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-20 lg:gap-32 md:gap-16 sm:gap-8">
          <div className="mpb-20">
            <h1 className="font-bold text-4xl md mb-4">
              Lorem ipsum <br />
              dolor sit amet <br /> consectetur.
            </h1>
            <p className="text-[#c4c4c4] mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              deleniti repellat qui libero ipsum esse.
            </p>
            <div className="flex">
              <button className="bg-black text-white py-2 mr-6 px-4 rounded mb-5 font-bold">
                CalltoAction
              </button>
              <button className="border border-black lg:py-2 md:py-1 sm:py-1 px-4 text-black rounded mb-5 font-bold">
                See Workspace
              </button>
            </div>
          </div>
          <div>
            <div className="relative mt-20 mb-20">
              <div className="bg-[#c4c4c4] absolute z-10 lg:w-96 md:w-60 h-96"></div>
              <div className="bg-[#9d9d9d] absolute -top-10 lg:right-10 z-20 h-36 w-36"></div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:gris-cols-3 sm:grid-cols-1 gap-5 pt-48">
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
          <div className="relative">
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
