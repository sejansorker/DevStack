import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div>
        <Container>
            <div className="py-6 flex justify-between items-center ">
                <div className="w-1/4">
                <div className="">
                     <img src={Logo} alt="" />
                </div>
                </div>
                <div className="w-2/4">
                <ul className='flex justify-center items-center gap-x-5'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="w-1/4">
                <div className="gap-x-5 flex items-center justify-end">
                    <button className=''>Sign in</button>
                    <button className='bg-[#D91B7E] py-2.5 px-5 rounded-[30px]'>Sign up</button>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar