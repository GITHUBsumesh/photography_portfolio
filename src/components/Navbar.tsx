"use client";
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div className='bg-backgroundNavbar font-nav text-nav leading-nav h-[50px] px-5 m'>
        <div className="mx-5 flex justify-between items-center h-full py-5">
            <div className="left">
                <Image src="/Images/camera_logo.png" alt="logo" width={50} height={50} onClick={() => handleScroll("hero")} />
            </div>
            <div className="right">
            <ul className="flex space-x-5 gap-6 text-white">
            <li className="cursor-pointer" onClick={() => handleScroll("about")}>About</li>
            <li className="cursor-pointer" onClick={() => handleScroll("blogs")}>Blogs</li>
            <li className="cursor-pointer" onClick={() => handleScroll("top-picks")}>Top Picks</li>
            <li className="cursor-pointer" onClick={() => handleScroll("faqs")}>FAQs</li>
            <li className="cursor-pointer" onClick={() => handleScroll("contact")}>Contact</li>
          </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar