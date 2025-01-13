import React from 'react'
import { NavLink } from 'react-router-dom'
import { PiBracketsCurlyBold } from "react-icons/pi";

const Navbar = () => {

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'About us', link: '/about-us' },
    { name: 'Contact us', link: '/contact-us' },
  ]

  return (
    <div className='w-full bg-white poppins-regular shadow-lg p-2'>
      <div className='w-full max-w-7xl container mx-auto'>

        {/* For Desktop  */}
        <div className='hidden lg:flex justify-between items-center'>
          <div>
            <h1 className='flex justify-center items-center gap-2 text-3xl font-semibold text-[#1d2951] uppercase'>Code<h1 className='text-[#7091e6]'>Braces</h1><PiBracketsCurlyBold  className='h-9 w-9'/></h1>
          </div>
          <div className='flex items-center '>
            {navItems.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? 'text-lg font-semibold px-5 py-4 text-[#7091e6]'
                    : 'text-lg font-medium px-5 py-4 text-[#1d2951] hover:text-[#7091e6] transition-all duration-150 ease-in-out'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div>
            <button className='font-semibold text-white uppercase bg-[#7091e6] px-6 py-2.5 rounded-md'>
              Get in Touch
            </button>
          </div>
        </div>


        {/* For Mobile */}
        <div className=' flex lg:hidden justify-between items-center'>
          <div>
            <h1 className='text-xl font-semibold'>Code Braces</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar