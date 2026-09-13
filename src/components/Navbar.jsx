

import React from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 left-0 w-full py-5 border-b-1 border-gray-200">
      <Container>
        <div className="flex items-center justify-between  font-main">
          <button className="text-2xl md:hidden">
            ☰
          </button>
          <div className="w-auto md:w-1/4">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden w-2/4 md:block">
            <ul className="flex items-center justify-center gap-x-5 text-[14px] font-medium text-[#475569]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="w-auto md:w-1/4">
            <div className="flex items-center justify-end gap-x-3 md:gap-x-5">

              <button className="cursor-pointer text-[13px] font-medium text-[#475569] md:text-[14px]">
                Sign in
              </button>

              <button className="cursor-pointer rounded-[30px] bg-[#D91B7E] px-4 py-2 text-[13px] font-semibold text-white md:px-5 md:py-2.5 md:text-[14px]">
                Sign up
              </button>

            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Navbar;