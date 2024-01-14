import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { VideoCameraIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/outline'

export default function Header() {
   return (
      <header className="flex z-50 justify-center sticky top-0 w-full h-fit border-b border-opacity-40 bg-white">
         <nav className="w-full lg:w-1/2 flex justify-between items-center p-4">
            <div className='flex items-center gap-3'>
               {/* <VideoCameraIcon className='w-9' /> */}
               <h1 className="uppercase font-bold md:text-xl">Net movie</h1>
            </div>
            <div className='flex items-center gap-3'>
               <div className='relative'>
                  <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                     <MagnifyingGlassIcon className='w-5 text-gray-400' />
                  </div>
                  <input
                     type="text"
                     name='search'
                     className="block ps-10 py-5 px-2 h-8 outline-none bg-gray-100 text-gray-400 md:text-sm text-xs rounded-md"
                     placeholder="Search movies ... "
                  />
               </div>
            </div>
         </nav>
      </header>
   )
}
