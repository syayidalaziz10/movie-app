export default function Card ({movie}) {
   const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

   return (
      <div className="scale-90 lg:scale-100">        
         <img src={IMAGE_BASE_URL + movie.poster_path} alt="Fav movie banner"
            className="w-44 h-44 mb-3 rounded-lg"/>
         <div className="w-44 h-fit text-center md:text-base text-sm tracking-tight leading-normal text-clip font-semibold text-black/[0.8]">{movie.original_title}</div>
      </div>
   )
}