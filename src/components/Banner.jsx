import React from 'react'
import Container from './Container'
import Bannerr from "../assets/banner-stack.png"
const Banner = () => {
  return (
    <div className='pt-[142px] pb-[152px]'>
        <Container>
           <div className="flex items-center">
             <div className="w-2/3">
                <h1 className='text-[60px] font-extrabold leading-none pb-5'>Build Your Ideal
                  Development Stack </h1>
                  <p className='text-[18px] font-normal pb-10 pr-25'>Explore frontend, backend, database, and tooling options,
                     compare them side by side, and put together the stack that fits your
                     next project.</p>
                     <button className='p-4 text-[14px] bg-[#F97316] rounded-[8px] mr-4'>Explore Technologies</button>
                     <button className='py-4 px-11.5 border-1 border-[#E5E7EB] text-[14px]  rounded-[8px] '>Learn More</button>
            </div>
            <div className="w-1/3">
    <img className='' src={Bannerr} alt="" />
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Banner