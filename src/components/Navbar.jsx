import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div>
        <Container>
            <div className="py-6 flex justify-between items-center font-main">
                <div className="w-1/4">
                <div className="">
                     <img src={Logo} alt="" />
                </div>
                </div>
                <div className="w-2/4">
                <ul className='flex justify-center items-center gap-x-5 text-[14px] text-[#475569] font-medium'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="w-1/4">
                <div className="gap-x-5 flex items-center justify-end">
                    <button className='text-[14px] text-[#475569] font-medium'>Sign in</button>
                    <button className='bg-[#D91B7E] py-2.5 px-5 rounded-[30px] text-[14px] text-[#fff] font-semibold'>Sign up</button>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar