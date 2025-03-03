import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { PiBracketsCurlyBold } from "react-icons/pi";
import { MdMenuOpen, MdClose } from "react-icons/md";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true)
  }

  useEffect(() => {
    const handleOutsideCLick = (e) => {
      if (menuOpen && e.target.classList.contains('overlay')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideCLick);
    return () => {
      document.removeEventListener('click', handleOutsideCLick);
    }
  }, [menuOpen]);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'About us', link: '/about-us' },
    { name: 'Contact us', link: '/contact-us' },
  ]

  return (
    <div className='w-full fixed left-0 top-0 z-50 bg-white poppins-regular shadow-lg py-2.5 px-3 sm:py-2.5 lg:py-3 sm:px-6'>
      <div className='w-full lg:max-w-7xl lg:container lg:mx-auto'>

        {/* For Desktop  */}
        <div className='hidden lg:flex justify-between items-center'>
          <div>
            <h1 className='flex justify-center items-center gap-2 text-3xl font-semibold text-[#1d2951] uppercase'>Code<h1 className='text-[#7091e6]'>Braces</h1><PiBracketsCurlyBold className='h-9 w-9' /></h1>
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
              Get Started
            </button>
          </div>
        </div>


        {/* For Mobile */}
        <div className="flex lg:hidden items-center justify-between relative">

          <h1 className="flex justify-center items-center gap-2 text-2xl min-[425px]:text-3xl font-semibold text-[#1d2951] uppercase">
            Code
            <span className="text-[#7091e6]">Braces</span>
            <PiBracketsCurlyBold className="h-7 w-7" />
          </h1>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {!menuOpen ? <MdMenuOpen className="h-10 w-10" /> : <MdClose className='h-10 w-10 z-50' />}
          </button>

          {/* Overlay and Sliding Menu */}
          {menuOpen && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out overlay`}
              onClick={toggleMenu}
            ></div>
          )}

          <div
            className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "-translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Menu List */}
            <div className="flex flex-col">
              <h1 className=" flex items-center gap-2 py-3.5 px-2 sm:py-4 sm:px-4 text-2xl min-[425px]:text-3xl font-semibold text-[#1d2951] uppercase">
                Code
                <span className="text-[#7091e6]">Braces</span>
                <PiBracketsCurlyBold className="h-7 w-7" />
              </h1>
              <ul className='flex flex-col p-2 space-y-1.5'>
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    onClick={() => { setMenuOpen(false) }} // Close menu after selection
                    className={({ isActive }) =>
                      isActive
                        ? "block text-white text-lg bg-[#7091e6] rounded font-semibold py-2 px-4"
                        : "block text-[#1d2951] text-lg bg-gray-100 font-medium py-2 px-4"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>

              <div className='px-2 py-2'>
                <button className='uppercase w-full font-semibold border-2 border-[#7091e6] text-[#7091e6] hover:border-transparent hover:text-white hover:bg-[#7091e6] py-2.5 px-4 rounded transition-all duration-150 ease-in-out'>Get in Touch</button>
              </div>

            </div>
          </div>
        </div>



      </div>

    </div>

  )
}

export default Navbar