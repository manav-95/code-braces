import React from 'react'
import Hero from '../components/Hero'
import { MdDevices } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiTimerFlashLine } from "react-icons/ri";

import About_Card_Image from '../assets/about-card-image.jpg'


const Home = () => {

  const features = [
    { title: 'Responsive Designs', desc: 'Crafted to look stunning on all devices, from desktops to smartphones.', icon: <MdDevices className="h-12 w-12 text-blue-500 mb-4 group-hover:text-white" />, bgColor: 'hover:bg-blue-500 bg-opacity-20', },
    { title: 'SEO Optimized', desc: 'Designed with SEO best practices to improve your online visibility.', icon: <AiOutlineSearch className="h-12 w-12 text-green-500 mb-4 group-hover:text-white" />, bgColor: 'hover:bg-green-500 bg-opacity-20', },
    { title: 'Custom Solutions', desc: 'Tailored solutions that meet your unique business needs.', icon: <FiSettings className="h-12 w-12 text-purple-500 mb-4 group-hover:text-white" />, bgColor: 'hover:bg-purple-500 bg-opacity-20', },
    { title: 'Fast Delivery', desc: 'Get your project completed quickly without compromising quality.', icon: <RiTimerFlashLine className="h-12 w-12 text-red-500 mb-4 group-hover:text-white" />, bgColor: 'hover:bg-red-500 bg-opacity-20', },
  ]

  const aboutInfo = [
    { count: '1', title: 'Year of Expreience', },
    { count: '5', title: 'Project Challenge', },
    { count: '20+', title: 'Positive Reviews', },
    { count: '5', title: 'Team Members', },
  ]

  return (
    <>

      <Hero />

      <div className="max-w-7xl container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-20">
        {features.map((item, index) => (
          <div key={index} className={`group flex flex-col items-center text-center bg-white shadow-lg py-6 px-4 rounded-lg transition-all ${item.bgColor}`}>
            {item.icon}
            <h3 className="text-xl font-semibold group-hover:text-white transition-colors mb-1.5">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-4.5 font-medium group-hover:text-white transition-colors">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className='max-w-7xl container mx-auto px-4 py-20'>
        <div className='grid grid-cols-2 gap-2'>

          <div className='flex flex-col justify-between h-full pb-4 bg-[#7091e6] bg-opacity-15 rounded-2xl px-4 py-4'>
            <div className='my-2 px-4'>
              <p className='text-orange-500 font-semibold text-xl'>How its Started</p>
            </div>
              <div className='mt-4 px-4'>
                <h1 className='text-6xl font-semibold uppercase leading-snug'>Our Dream is Global Learning Transformation</h1>
              </div>
              <div className='mt-auto bg-white rounded-xl'>
              <p className='text-lg font-medium leading-snug p-4'>Lorem ipsum dolor sit amet askfkasjh askfhasfk aksjfh kasjfh akjsfh aksjfh asld slksahsa lakksh alfhals fakshf lsafaahhf a sfkh consectetur adipisicing elit. Commodi, incidunt? Eveniet, dolorem, obcaecati sunt molestias recusandae, minus numquam ratione expedita voluptatum commodi a voluptatem dolores accusantium placeat repellendus ex nisi non inventore saepe ad animi mollitia. A, saepe tempora distinctio eius sit id doloribus ad perspiciatis cum numquam quod consequuntur praesentium at nemo expedita voluptas quae, accusamus blanditiis? Vitae, voluptatum!</p>
              </div>
            </div>

          <div className='flex flex-col justify-between space-y-2'>
            <div className=''>
              <img src={About_Card_Image} alt='about card image' className='aspect-[7/5] rounded-2xl' />
            </div>
            <div className='grid grid-cols-2 gap-4 bg-[#7091e6] bg-opacity-15 p-4 rounded-2xl'>
              {aboutInfo.map((info, index) =>
                <div key={index} className='flex flex-col justify-center items-center bg-white shadow rounded-xl px-4 py-8'>
                  <h1 className='text-3xl font-semibold mb-1'>{info.count}</h1>
                  <p className='font-medium'>{info.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home