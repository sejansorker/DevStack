import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='bg-[#F1F5F9] pt-16 pb-12 font-main'>
        <Container>
            <div className="flex  justify-between pb-14 border-b-1 border-[rgba(148,163,184,0.46)]">
                <div className="w-2/6">
                <div className="">
                    <img src={Logo} alt="" />
                    <p className='pr-10 text-[#64748B] text-[12px] py-3'>Curated tools, technologies, and resources for developers building
modern software.</p>
                 <div className="flex  items-center gap-x-2 text-[12px] text-[#475569]">
                    <p>GitHub</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                 </div>
                </div>
                </div>
                <div className="w-1/6 ">
                <h5 className='text-[12px] text-[#0F172A] font-bold'>PRODUCT</h5>
                 <ul className='text-[#64748B] text-[12px] '>
                    <li className='pb-2 pt-4'>Home</li>
                    <li className='pb-2'>Technologies</li>
                    <li className='pb-2'>Project</li>
                 </ul>
                </div>
                <div className="w-1/6">
                <h5 className='text-[12px] text-[#0F172A]  font-bold'>COMPANY</h5>
                 <ul className='text-[#64748B] text-[12px] '>
                    <li className='pb-2 pt-4'>About</li>
                    <li className='pb-2'>Contact</li>
                    <li className='pb-2'>Careers</li>
                 </ul>
                </div>
                <div className="w-1/6">
                <h5 className='text-[12px] text-[#0F172A]  font-bold'>LEGAL</h5>
                 <ul className='text-[#64748B] text-[12px]'>
                    <li className='pb-2 pt-4'>Privacy Policy</li>
                    <li className='pb-2'>Terms of Service</li>
                 </ul>
                </div>
            </div>
            <div className="flex items-center justify-between text-[#64748B] text-[12px] pt-8">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className='flex items-center gap-x-3'>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </Container>
    </div>
  )
}

export default Footer