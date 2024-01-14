"use client"

import Image from 'next/image'
import BannerImage from './banner.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';


export default function Carousel ({movies}) {

   return (
      <>
         <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
               prev: {
                  shadow: true,
                  translate: [0, 0, -400],
               },
               next: {
                  translate: ['100%', 0, 0],
               },
            }}
            autoplay={{
               delay: 7000,
               disableOnInteraction: false
            }}
            modules={[Autoplay, EffectCreative]}
            className="mySwiper w-full h-full"
         >
            {movies.map((movie) => (
               <SwiperSlide className='w-full rounded-2xl' key={movie.id}>
                  <Image
                     src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                     alt={`${movie.title} poster`}
                     fill = {true}
                     unoptimized
                     className="w-full brightness-50 block"
                  />
                  <div className='absolute inset-y-0 start-0 flex lg:items-center items-end pb-10 lg:p-10 p-5 pointer-events-none'>
                     <div className="flex justify-start flex-col gap-2 text-left">
                        <h1 className="md:text-3xl font-semibold text-xl text-white">{movie.original_title}</h1>
                        <p className="text-white/[0.6] text-xs md:text-base hidden lg:block">{movie.overview}</p>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}