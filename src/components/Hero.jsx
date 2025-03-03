

import 'swiper/css';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import Ex1 from '../assets/hero/ex-1.png'
import Ex2 from '../assets/hero/ex-2.png'
import Ex3 from '../assets/hero/ex-3.png'

const Hero = () => {

    const heroImages = [
        { image: Ex1, alt: 'image 1' },
        { image: Ex2, alt: 'image 2' },
        { image: Ex3, alt: 'image 3' },
    ]

    return (
        <>
            <div className="w-full lg:h-[500px] xl:h-[560px] bg-[#7091e6] bg-opacity-25 text-[#1d2951] flex justify-center items-center px-6 py-8 lg:px-8 lg:py-0 poppins-regular">
                <div className="flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:space-x-2 xl:space-x-12 max-w-7xl container mx-auto">

                    {/* Left Section */}
                    <div className="lg:w-1/2 flex flex-col space-y-6 justify-center items-center">
                        <h1 className="text-6xl min-[425px]:text-7xl lg:text-5xl xl:text-6xl font-semibold text-left">
                            Custom Website for Your Business Success
                        </h1>
                        <p className='text-xl min-[425px]:text-2xl lg:text-xl xl:text-xl font-semibold'>Your one-stop solution for professional, custom website development</p>
                        <button className='px-6 py-3.5 text-sm min-[425px]:text-md lg:text-md text-white bg-[#7091e6] lg:bg-transparent lg:border-2 lg:border-[#7091e6] lg:text-[#7091e6] hover:lg:border-transparent hover:lg:bg-[#7091e6] hover:lg:shadow-lg hover:lg:text-white uppercase font-semibold mr-auto rounded-md transition-all duration-150 ease-in-out'>Start Your Project</button>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-6/12 xl:w-6/12 flex justify-center items-center">
                        <Swiper
                            modules={[EffectFade, Autoplay]}
                            spaceBetween={100}
                            slidesPerView={1}
                            centeredSlides={true}
                            allowTouchMove={false}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            speed={700}
                            className='w-full h-[260px] sm:h-[420px] md:h-[500px] lg:h-[380px] xl:h-[400px]'>
                            {heroImages.map((item, index) => (
                                <SwiperSlide>
                                    <img
                                        key={index}
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-contain min-[425px]:object-cover rounded-xl"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Hero