import Hero from '../components/Hero'
import { MdDevices } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiTimerFlashLine } from "react-icons/ri";

import About_Card_Image from '../assets/about-card-image.jpg'


const Home = () => {

  const features = [
    { title: 'Responsive Designs', desc: 'Crafted to look stunning on all devices, from desktops to smartphones.', icon: <MdDevices className="h-10 w-10 text-blue-500 group-hover:text-blue-500" />, iconBG : 'bg-blue-500 bg-opacity-15 group-hover:bg-white', shadow: 'hover:shadow-blue-500', bgColor: 'hover:bg-blue-500 bg-opacity-20', },
    { title: 'SEO Optimized', desc: 'Designed with SEO best practices to improve your online visibility.', icon: <AiOutlineSearch className="h-10 w-10 text-green-500 group-hover:green-500" />, iconBG : 'bg-green-500 bg-opacity-15 group-hover:bg-white', shadow: 'hover:shadow-green-500', bgColor: 'hover:bg-green-500 bg-opacity-20', },
    { title: 'Custom Solutions', desc: 'Tailored solutions that meet your unique business needs.', icon: <FiSettings className="h-10 w-10 text-purple-500 group-hover:text-purple-500" />, iconBG : 'bg-purple-500 bg-opacity-15 group-hover:bg-white', shadow: 'hover:shadow-purple-500', bgColor: 'hover:bg-purple-500 bg-opacity-20', },
    { title: 'Fast Delivery', desc: 'Get your project completed quickly without compromising quality.', icon: <RiTimerFlashLine className="h-10 w-10 text-red-500 group-hover:text-red-500" />, iconBG : 'bg-red-500 bg-opacity-15 group-hover:bg-white', shadow: 'hover:shadow-red-500', bgColor: 'hover:bg-red-500 bg-opacity-20', },
  ]

  const aboutInfo = [
    { count: '1', title: 'Year of Experience', },
    { count: '5', title: 'Project Challenge', },
    { count: '20+', title: 'Positive Reviews', },
    { count: '5', title: 'Team Members', },
  ]

  return (
    <>

      <Hero />

      <div className="max-w-7xl container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-20">
        {features.map((item, index) => (
          <div key={index} className={`group flex flex-col items-center text-center bg-white shadow-lg hover:-translate-y-4 py-6 px-4 rounded-lg transition-all duration-300 ease-in-out ${item.shadow} ${item.bgColor}`}>
          <div className={`${item.iconBG} mb-4 p-3.5 rounded-[25%_10%_25%_10%] flex items-center justify-center`}>
            {item.icon}
          </div>
          
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
              <h1 className='text-6xl text-balance font-semibold uppercase leading-snug'>Empowering Innovation Through Digital Transformation</h1>
            </div>
            <div className='mt-auto min-h-[273px] bg-white rounded-xl flex justify-center items-center'>
              <p className='text-lg font-medium leading-8 p-4 text-pretty'>
              We believe in the power of technology to reshape learning and innovation on a global scale. Our mission is to craft seamless, high-performing websites that enhance user experience, drive engagement, and bring creative ideas to life. Through cutting-edge solutions and a passion for excellence, we aim to bridge the gap between businesses and their digital success.
              </p>
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