// import React from 'react'

// import Container from './Container'
// import Logo from "../assets/logo.png"
// const Navbar = () => {
//   return (
//     <div>
//         <Container>
//             <div className="py-6 flex justify-between items-center font-main">
//                 <div className="w-1/4">
//                 <div className="">
//                      <img src={Logo} alt="" />
//                 </div>
//                 </div>
//                 <div className="w-2/4">
//                 <ul className='flex justify-center items-center gap-x-5 text-[14px] text-[#475569] font-medium'>
//                     <li>Home</li>
//                     <li>Technologies</li>
//                     <li>Projects</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//                 </div>
//                 <div className="w-1/4">
//                 <div className="gap-x-5 flex items-center justify-end">
//                     <button className='text-[14px] text-[#475569] font-medium'>Sign in</button>
//                     <button className='bg-[#D91B7E] py-2.5 px-5 rounded-[30px] text-[14px] text-[#fff] font-semibold'>Sign up</button>
//                 </div>
//                 </div>
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default Navbar


import React from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between py-5 font-main">
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
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-auto md:w-1/4">
            <div className="flex items-center justify-end gap-x-3 md:gap-x-5">

              <button className="text-[13px] font-medium text-[#475569] md:text-[14px]">
                Sign in
              </button>

              <button className="rounded-[30px] bg-[#D91B7E] px-4 py-2 text-[13px] font-semibold text-white md:px-5 md:py-2.5 md:text-[14px]">
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