import Image from "next/image"
import { SunIcon } from '@heroicons/react/24/outline'
import BannerImage from './banner.jpg'
import { getTrendingMovies } from "../../../configs/request"
import Card from "@/components/card/card"


export default async function Main() {
   const movies = await getTrendingMovies();
   interface Movie {
      id: number;
      title: string;
      // Tambahkan properti lainnya sesuai kebutuhan
   }

   return (
      <main className="flex flex-col justify-center items-center p-2 my-10 lg:w-1/2 h-fit gap-10">
         <div className="w-full relative">
            <Image
               src={BannerImage}
               alt="Fav movie banner"
               className="w-full rounded-2xl brightness-50 block"
            />
            <div className='absolute inset-y-0 start-0 flex items-center lg:p-10 p-5 pointer-events-none'>
               <div className="flex justify-start flex-col gap-2 text-left">
                  <h3 className="text-white md:text-base text-xs">Action, Comedy</h3>
                  <h1 className="md:text-3xl text-xl text-white">The Hunger Games: The Ballad of Songbirds & Snakes</h1>
                  <p className="text-white/[0.6] text-xs md:text-base hidden md:block">64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12. </p>
               </div>
            </div>
         </div>
         <div className="w-full h-fit p-1 lg:p-0">
            <div className="flex items-center justify-between">
               <h1 className="text-left font-semibold md:text-3xl text-xl text-black">Discover Movies</h1>
               <form action="">
                  <select name="" id="" className="px-2 py-3 bg-gray-100 rounded-md text-sm outline-none">
                     <option value="">All</option>
                     <option value="">Latest</option>
                     <option value="">Top Rating</option>
                  </select>
               </form>
            </div>
         </div>
         <div className="w-full flex flex-wrap justify-start items-start lg:gap-3">
            {movies.map((movie: Movie) => {
               return <Card movie={movie} key={movie.id} />
            })}
         </div>
         <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
            <SunIcon className='w-5 text-black/[0.7]' />
         </button>
      </main>
      // <h1>Main</h1>  
   )
}
