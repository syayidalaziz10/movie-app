import Image from "next/image"
import { StarIcon } from '@heroicons/react/24/solid'
import BannerImage from './banner.jpg'

export default function Main() {
   return (
      <main className="flex flex-col justify-center items-center p-2 my-10 w-1/2 h-fit gap-10">
         <div className="w-full relative">
            <Image
               src={BannerImage}
               alt="Fav movie banner"
               className="w-full rounded-2xl brightness-50 block"
            />
            <div className='absolute inset-y-0 start-0 flex items-center p-10 pointer-events-none'>
               <div className="flex justify-start flex-col gap-2 text-left">
                  <h3 className="text-white text-base">Action, Comedy</h3>
                  <h1 className="text-3xl text-white">The Hunger Games: The Ballad of Songbirds & Snakes</h1>
                  <p className="text-white/[0.6]">64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12. </p>
                  {/* <button className="px-4 py-1 text-center text-white text-sm bg-white bg-opacity-40 backdrop-blur-sm w-fit h-10 rounded-full">Visit here</button> */}
               </div>
            </div>
         </div>
         <div className="w-full h-fit">
            <div className="flex items-center justify-between">
               <h1 className="text-left font-semibold text-3xl text-black">Discover Movies</h1>
               <form action="">
                  <select name="" id="" className="px-2 py-3 bg-gray-100 rounded-md text-sm outline-none">
                     <option value="">All</option>
                     <option value="">Latest</option>
                     <option value="">Top Rating</option>
                  </select>
               </form>
            </div>
         </div>
         <div className="w-full flex flex-wrap justify-start items-center gap-3">
            <div className="flex flex-col items-center gap-3">
               <Image
                  src={BannerImage}
                  object-fit="cover"
                  alt="Fav movie banner"
                  className="w-44 h-44 rounded-lg"
               />
               <div className="w-44 h-fit text-center text-base tracking-tight leading-normal text-clip font-semibold text-black/[0.8]">Hunger Games</div>
            </div>
         </div>
      </main>
      // <h1>Main</h1>  
   )
}