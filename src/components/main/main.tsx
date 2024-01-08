import Image from "next/image"
import BannerImage from './banner.jpg'

export default function Main() {
   return (
      <main className="flex flex-col justify-center items-center p-2 my-10 w-1/2 h-fit gap-10">
         <div className="w-full">
            <Image
               src={BannerImage}
               alt="Fav movie banner"
               className="w-full rounded-2xl brightness-75"
            />
         </div>
         <div className="w-full h-fit">
            <h1 className="text-left font-semibold text-3xl text-black/[]">Discover Movies</h1>
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
