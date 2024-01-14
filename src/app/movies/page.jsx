import Image from 'next/image'
import BannerImage from './banner.jpg'


export default function Home() {
   return (
      <main className="flex flex-col justify-center items-center p-2 my-10 lg:w-1/2 w-full h-fit gap-10">
         <div className='w-full backdrop-blur-sm'>
            <Image
               src={BannerImage}
               alt="Fav movie banner"
               className="w-full rounded-3xl brightness-50 block"
            />
         </div>
      </main>
   )
}
