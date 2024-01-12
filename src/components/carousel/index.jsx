import Image from 'next/image'
import BannerImage from './banner.jpg'

export default function Carousel () {
   return (
      <div className="w-full relative">
         <div>
            <Image
               src={BannerImage}
               alt="Fav movie banner"
               className="w-full rounded-2xl brightness-50 block"
            />
            <div className='absolute inset-y-0 start-0 flex items-center lg:p-10 p-5 pointer-events-none'>
               <div className="flex justify-start flex-col gap-2 text-left">
                  <h3 className="text-white/[0.9] font-normal md:text-base text-xs">Action, Comedy</h3>
                  <h1 className="md:text-3xl font-semibold text-xl text-white">The Hunger Games: The Ballad of Songbirds & Snakes</h1>
                  <p className="text-white/[0.6] text-xs md:text-base hidden md:block">64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12. </p>
               </div>
            </div>
         </div>
      </div>
   )
}