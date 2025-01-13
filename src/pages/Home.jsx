import React from 'react'
import Hero from '../components/Hero'
import { MdDevices } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiTimerFlashLine } from "react-icons/ri";


const Home = () => {

  const features = [
    { title: 'Responsive Designs', desc: 'Crafted to look stunning on all devices, from desktops to smartphones.', icon: <MdDevices className="h-12 w-12 text-blue-500 mb-4 group-hover:text-white"/>, bgColor: 'hover:bg-blue-500 bg-opacity-20', },
    { title: 'SEO Optimized', desc: 'Designed with SEO best practices to improve your online visibility.', icon: <AiOutlineSearch className="h-12 w-12 text-green-500 mb-4 group-hover:text-white"/>, bgColor: 'hover:bg-green-500 bg-opacity-20', },
    { title: 'Custom Solutions', desc: 'Tailored solutions that meet your unique business needs.', icon: <FiSettings className="h-12 w-12 text-purple-500 mb-4 group-hover:text-white"/>, bgColor: 'hover:bg-purple-500 bg-opacity-20', },
    { title: 'Fast Delivery', desc: 'Get your project completed quickly without compromising quality.', icon: <RiTimerFlashLine className="h-12 w-12 text-red-500 mb-4 group-hover:text-white"/>, bgColor: 'hover:bg-red-500 bg-opacity-20', },
  ]

  return (
    <>
      <Hero />
      
      <div className="max-w-7xl container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16">
      
        {features.map((item, index) => (
          <div key={index} className={`group flex flex-col items-center text-center bg-white shadow-lg py-6 px-4 rounded-xl ${item.bgColor}`}>
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>

    </>
  )
}

export default Home