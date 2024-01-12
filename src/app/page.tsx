import Header from "@/components/header"
import { SunIcon } from '@heroicons/react/24/outline'
import { getTrendingMovies } from "../../configs/request"
import Card from "@/components/card"
import Carousel from "@/components/carousel"

export default async function Home() {

  const movies = await getTrendingMovies();
  interface Movie {
    id: number;
    title: string;
  }

  return (
    <main className="flex flex-col justify-center items-center p-2 my-10 lg:w-1/2 w-full h-fit gap-10">
      <div>
        <Carousel />
      </div>
      <div className="w-full h-fit p-2 lg:p-0">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
        {movies.map((movie: Movie) => {
          return <Card movie={movie} key={movie.id} />
        })}
      </div>
      <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
        <SunIcon className='w-5 text-black/[0.7]' />
      </button>
    </main>
  )
}
