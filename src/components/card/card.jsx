import Image from 'next/image'


export default function Card ({movie}) {
   return (
      <div className="scale-90 lg:scale-100">
         <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="image poster"
            width = {500}
            height = {500}
            className="w-44 h-44 mb-3 rounded-lg"
            key = {movie.id}
         />
         <div className="w-44 h-fit text-center md:text-base text-sm tracking-tight leading-normal text-clip font-semibold text-black/[0.8]">{movie.original_title}</div>
      </div>
   )
}