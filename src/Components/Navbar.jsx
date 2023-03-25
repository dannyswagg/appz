import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <nav>
          <div className="flex justify-between items-center h-20 w-full mx-auto lg:px-16 md:px-16 sm:px-20 z-40 lg:mb-20 md:mb-10 sm:mb-10 sticky">
            <Link to="/">
              <h1 className="font-bold text-3xl float-right">
                Logo{" "}
                <span className="bg-[#c4c4c4] rounded-full h-10 w-10"></span>
              </h1>
            </Link>
            <ul className="mx-auto uppercase text-xs lg:inline-flex hidden">
              <NavLink to="/">
                <li className="px-4">Home</li>
              </NavLink>
              <NavLink>
                <li className="px-4">About</li>
              </NavLink>
              <NavLink>
                <li className="px-4">Services</li>
              </NavLink>
              <NavLink to="products">
                <li className="px-4">Products</li>
              </NavLink>
            </ul>
            <div className="buttons font-bold lg:inline hidden">
              <Link to="login">
                <button
                  className="inline-flex rounded-md mr-2 px-6 py-2 text-[#ffffff]
           bg-black duration-200 border hover:border-black"
                >
                  CalltoAction
                </button>
              </Link>
            </div>
            <div className="items-center flex">
              <div
                onClick={handleNav}
                className="block lg:hidden focus:outline-0 float-right"
              >
                <Hamburger
                  distance="sm"
                  duration={0.9}
                  color="#000000"
                  size={25}
                  rounded-md
                  hideOutline={false}
                  label="Show menu"
                  toggled={open}
                  toggle={setOpen}
                />
              </div>
            </div>

            <div
              className={
                open
                  ? "fixed left-0 top-0 w-[60%] bg-[#9d9d9d] h-full z-10 text-black ease-in-out duration-800 pt-10 text-center"
                  : "fixed left-[-100%]"
              }
            >
              <h1 className="uppercase text-3xl mb-2">Logo</h1>
              <ul className="text-sm uppercase font-bold">
                <Link to="/">
                  <li className="my-5" onClick={handleNav}>
                    Home
                  </li>
                </Link>
                <Link to="/">
                  <li className="my-5" onClick={handleNav}>
                    About
                  </li>
                </Link>
                <Link to="/">
                  <li className="my-5" onClick={handleNav}>
                    Services
                  </li>
                </Link>
                <Link to="products">
                  <li className="my-5" onClick={handleNav}>
                    Products
                  </li>
                </Link>
              </ul>
              <div className="text-sm">
                <ul>
                  <Link to="login">
                    <li
                      className="my-4 mx-3 py-3 rounded-md border border-black font-bold"
                      onClick={handleNav}
                    >
                      CalltoAction
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
